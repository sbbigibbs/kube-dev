const WebSocket = require('ws')
const flatMapArray = require('fbjs/lib/flatMapArray');
const http = require('http');
const nullthrows = require('fbjs/lib/nullthrows');
const querystring = require('querystring');

const parseUrl = require('url').parse;

const debug = require('debug')('RNP:InspectorProxy');
const launchChrome = require('./launchChrome');


const DEVICE_TIMEOUT = 30000;

// FIXME: This is the url we want to use as it more closely matches the actual protocol we use.
// However, it's broken in Chrome 54+ due to it using 'KeyboardEvent.keyIdentifier'.
// const DEVTOOLS_URL_BASE = 'https://chrome-devtools-frontend.appspot.com/serve_rev/@178469/devtools.html?ws=';
const DEVTOOLS_URL_BASE = 'https://chrome-devtools-frontend.appspot.com/serve_file/@60cd6e859b9f557d2312f5bf532f6aec5f284980/inspector.html?ws=';

class Device {
  name: string;

  _id: string;
  _socket: any;
  _handlers: Map<string, (result?: Object) => void>;
  _connections: Map<string, any>;

  constructor(id, name, socket) {
    this.name = name;
    this._id = id;
    this._socket = socket;
    this._handlers = new Map();
    this._connections = new Map();

    this._socket.on('message', this._onMessage.bind(this));
    this._socket.on('close', this._onDeviceDisconnected.bind(this));
  }

  getPages() {
    return this._callMethod('getPages');
  }

  connect(pageId, socket) {
    socket.on('message', (message: string) => {
      if (!this._connections.has(pageId)) {
        // Not connected, silently ignoring
        return;
      }

      // TODO: This should be handled way earlier, preferably in the inspector itself.
      // That is how it works it newer versions but it requires installing hooks.
      if (message.indexOf('Network.loadResourceForFrontend') !== -1) {
        this._loadResourceForFrontend(socket, JSON.parse(message));
        return;
      }

      this._send({
        event: 'wrappedEvent',
        payload: {
          pageId,
          wrappedEvent: message,
        },
      });
    });
    socket.on('close', () => {
      if (this._connections.has(pageId)) {
        this._send({event: 'disconnect', payload: {pageId: pageId}});
        this._removeConnection(pageId);
      }
    });
    this._connections.set(pageId, socket);
    this._send({event: 'connect', payload: {pageId: pageId}});
  }

  _callMethod(name = 'getPages') : Promise<any> {
    const promise = new Promise((fulfill, reject) => {
      const timerId = setTimeout(() => {
        this._handlers.delete(name);
        reject(new Error('Timeout waiting for device'));
      }, DEVICE_TIMEOUT);
      this._handlers.set(name, arg => {
        clearTimeout(timerId);
        fulfill(arg);
      });
    });
    this._send({event: name});
    return promise;
  }

  _send(message) {
    debug('-> device', this._id, message);
    // This try/catch is unfortunate, but there is a small window where a message can be sent
    // 1. after the socket is closed, and
    // 2. before the callback for the 'close' event on the socket is run.
    // Since we don't want the packager to crash in this situation, we have to guard against this.
    try {
      this._socket.send(JSON.stringify(message));
    } catch (err) {
      debug('Error sending', err);
    }
  }

  _onMessage(json) {
    debug('<- device', this._id, json);
    const message = JSON.parse(json);
    const handler = this._handlers.get(message.event);
    if (handler) {
      this._handlers.delete(message.event);
      handler(message.payload);
      return;
    }

    if (message.event === 'wrappedEvent') {
      this._handleWrappedEvent(message);
    } else if (message.event === 'disconnect') {
      this._handleDisconnect(message);
    } else if (message.event === 'open') {
      this._handleOpen(message);
    }
  }

  _handleWrappedEvent(event) {
    const payload = nullthrows(event.payload);
    const socket = this._connections.get(nullthrows(payload.pageId));
    if (!socket) {
      console.error('Invalid pageId from device:', payload.pageId);
      return;
    }
    socket.send(payload.wrappedEvent);
  }

  _handleDisconnect(event) {
    const payload = nullthrows(event.payload);
    const pageId = nullthrows(payload.pageId);
    this._removeConnection(pageId);
  }

  _handleOpen(event) {
    const payload = nullthrows(event.payload);
    const pageId = nullthrows(payload.pageId);
    const url = DEVTOOLS_URL_BASE + makeInspectorPageUrl(this._id, pageId);
    launchChrome(url);
  }

  _removeConnection(pageId) {
    const socket = this._connections.get(pageId);
    if (socket) {
      this._connections.delete(pageId);
      socket.close();
    }
  }

  _onDeviceDisconnected() {
    for (const pageId of this._connections.keys()) {
      this._removeConnection(pageId);
    }
  }

  _loadResourceForFrontend(socket, event) {
    const id = nullthrows(event.id);
    const url= nullthrows(nullthrows(event.params).url);
    debug('loadResourceForFrontend:', url);
    http.get(this._normalizeUrl(url), (response) => {
      // $FlowFixMe callback is optional
      response.setTimeout(0);
      let data = '';
      response.on('data', (chunk) => { data += chunk; });
      response.on('end', () => {
        socket.send(JSON.stringify({
          id: id,
          result: {
            statusCode: response.statusCode,
            content: data,
            responseHeaders: response.headers,
          },
        }));
      });
      response.on('error', (error) => {
        console.error('Failed to get resource', error);
      });
    });
  }

  _normalizeUrl(url: string): string {
    return url.replace('http://10.0.3.2', 'http://localhost')
      .replace('http://10.0.2.2', 'http://localhost');
  }
}

class InspectorProxy {
  _devices: Map<string, Device>;
  _devicesCounter: number;

  constructor() {
    this._devices = new Map();
    this._devicesCounter = 0;
  }

  attachToServer(server, pathPrefix) {
    this._createPageHandler(server, pathPrefix + '/page');
    this._createDeviceHandler(server, pathPrefix + '/device');
    this._createPagesListHandler(server, pathPrefix + '/');
    this._createPagesJsonHandler(server, pathPrefix + '/json');
  }

  _makePage(server, deviceId, deviceName, devicePage) {
    
    const wsUrl = makeInspectorPageUrl(deviceId, devicePage.id);
    return {
      id: `${deviceId}-${devicePage.id}`,
      title: devicePage.title,
      description: '',
      devtoolsFrontendUrl: DEVTOOLS_URL_BASE + wsUrl,
      webSocketDebuggerUrl: `ws://${wsUrl}`,
      deviceId,
      deviceName,
    };
  }

  _getPages(localAddress) {
    const promises = Array.from(this._devices.entries(), ([deviceId, device]) => {
      return device.getPages().then((devicePages) => {
        return devicePages.map(this._makePage.bind(this, localAddress, deviceId, device.name));
      });
    });

    const flatMap = (arr) => flatMapArray(arr, (x) => x);
    return Promise.all(promises).then(flatMap);
  }

  processRequest(req: any, res: any, next: any) {
    // TODO: Might wanna actually do the handling here
    const endpoints = [
      '/inspector/',
      '/inspector/page',
      '/inspector/device',
      '/inspector/json',
    ];
    if (endpoints.indexOf(req.url) === -1) {
      next();
    }
  }

  _createDeviceHandler(server, path) {
    const wss = new WebSocket.Server({
      server,
      path,
    });
    wss.on('connection', (socket) => {
      try {
        const query = parseUrl(socket.upgradeReq.url, true).query || {};
        const deviceName = query.name || 'Unknown';
        debug('Got device connection:', deviceName);
        const deviceId = String(this._devicesCounter++);
        const device = new Device(deviceId, deviceName, socket);
        this._devices.set(deviceId, device);
        socket.on('close', () => {
          this._devices.delete(deviceId);
        });
      } catch (e) {
        console.error(e);
        socket.close(1011, e.message);
      }
    });
  }

  _createPageHandler(server, path) {
    console.log(path)
    const wss = new WebSocket.Server({
      server,
      path,
    });
    wss.on('connection', (socket) => {
      try {
        const url = parseUrl(socket.upgradeReq.url, false);
        console.log(url)
        const { device, page } = querystring.parse(
          querystring.unescape(nullthrows(url.query)));
        if (device === undefined || page === undefined) {
          throw Error('Must provide device and page');
        }
        const deviceObject = this._devices.get(device);
        if (!deviceObject) {
          throw Error('Unknown device: ' + device);
        }

        deviceObject.connect(page, socket);
      } catch (e) {
        console.error(e);
        socket.close(1011, e.message);
      }
    });
  }

  _createPagesJsonHandler(server, path) {
    server.on('request', (request, response) => {
      if (request.url === path) {
        this._getPages(server.address()).then((result) => {
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.end(JSON.stringify(result));
        }, (error: Error) => {
          response.writeHead(500);
          response.end('Internal error: ' + error.toString());
        });
      }
    });
  }

  _createPagesListHandler(server, path) {
    server.on('request', (request, response) => {
      if (request.url === path) {
        this._getPages(server.address()).then((result) => {
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.end(buildPagesHtml(result));
        }, (error: Error) => {
          response.writeHead(500);
          response.end('Internal error: ' + error.toString());
        });
      }
    });
  }

}

function buildPagesHtml(pages) {
  const pagesHtml = pages.map((page) => {
    return escapeHtml`
      <li style="padding: 5px;">
        <a href="${page.devtoolsFrontendUrl}">
          ${page.deviceName} / ${page.title}
        </a>
      </li>
    `;
  }).join('\n');

  return `
    <html>
      <head><title>Pages</title></head>
      <body>
        <h1>Pages</h1>
        <hr>
        <ul style="list-style: none;">
          ${pagesHtml}
        </ul>
      </body>
    </html>
  `;
}

function escapeHtml(pieces, ...substitutions) {
  let result = pieces[0];
  for (let i = 0; i < substitutions.length; ++i) {
    result += substitutions[i].replace(/[<&"'>]/g, escapeHtmlSpecialChar) + pieces[i + 1];
  }

  return result;
}

function escapeHtmlSpecialChar(char: string): string {
  return (
    char === '&' ? '&amp;' :
    char === '"' ? '&quot;' :
    char === "'" ? '&#039;' :
    char === '<' ? '&lt;' :
    char === '>' ? '&gt;' :
    char
  );
}

function makeInspectorPageUrl(deviceId, pageId) {
  // The inspector frontend doesn't handle urlencoded params so we
  // manually urlencode it and decode it on the other side in _createPageHandler
  const query = querystring.escape(`device=${deviceId}&page=${pageId}`);
  return `localhost:8081/inspector/page?${query}`;
}

function attachToServer(server, pathPrefix) {
  const proxy = new InspectorProxy();
  proxy.attachToServer(server, pathPrefix);
  return proxy;
}

if (!module.parent) {
  console.info('Starting server');
  //process.env.DEBUG = 'RNP:Inspector';
  const serverInstance = http.createServer().listen(
    8081,
    'localhost',
    undefined,
    function() {
      attachToServer(serverInstance, '/inspector');
    }
  );
  serverInstance.timeout = 0;
}

// module.exports.attachToServer = attachToServer;
export default InspectorProxy;
