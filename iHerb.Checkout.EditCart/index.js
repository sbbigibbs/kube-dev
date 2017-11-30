var http = require('http'),
    https = require('https'),
    { URL } = require('url'),
    chokidar = require('chokidar'),
    checksum = require('checksum'),
    cheerio = require('cheerio'),
    fs = require('fs'),
    path = require('path'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    html = React.createElement.bind(null, 'html'), 
    head = React.createElement.bind(null, 'head'),
    meta = React.createElement.bind(null, 'meta'),
    body = React.createElement.bind(null, 'body'), 
    div = React.createElement.bind(null, 'div'), 
    style = React.createElement.bind(null, 'link'),
    script = React.createElement.bind(null, 'script');
    //App = React.createFactory(require('./App'))
    
//var bundle = fs.readFileSync('./dist/static/js/bundle.web.js');
//var sum = checksum(bundle);

var checkout = process.env.CHECKOUT_API_URL || "https://checkout-api.iherbtest.biz/v1",
    myaccount = process.env.MYACCOUNT_API_URL || "https://myaccount-api.iherbtest.biz/v1",
    content = process.env.CONTENT_URL || "https://www.iherbtest.com/content",
    basePath = process.env.BASE_PATH || '',
    host = content.match(/\S+(?=\/\S+$)/g)[0].split('https://')[1];
    
    dev = true;//process.env.CHECKOUT_API_URL && false || true;

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var bundle,
        sum,
        bundlePath = 'http://localhost:8080/bundle.web.js';
    
  if(!dev) {
    bundle = fs.readFileSync('./dist/bundle.web.js');
    sum = checksum(bundle);
    bundlePath = '/public/bundle.' + sum + '.js';
  } 

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function(req, res) {
  //res.writeHead(200);
  console.log(req.url);
  if(/\/cart\/public\/bundle\./g.test(req.url))
    forwardBundle(req, res, response =>{  res.setHeader('Content-Type', 'text/javascript');res.end(response) })
  else if(req.url !== '/favicon.ico')
    forwardHttps(req, (response, cookies) => { cookies && res.setHeader('set-cookie', cookies); res.end(response) })

  if (req.url == '/') {

    var cookies = parseCookies(req);
    
    //console.log(cookies)
    var prefs = cookies['iher-pref1'],
        language = prefs && prefs['lan'] || 'en-US',
        currency = prefs && prefs['scurcode'] || 'USD',
        country = prefs && prefs['sccode'] || 'US',
        temp = cookies['ihr-session-id1'],
        id = temp && temp['aid'];

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    jsbundle(js => {
      cssbundle(css => {
        header(req, country, language, currency, (headerHtml) => {
          footer(country, language, currency, (footerHtml) => {
            //console.log(footerHtml)
            var htmlRes = ReactDOMServer.renderToStaticMarkup(
              html({ className:'USA en shopping-cart mobile-web checkout ios' },
                head({dangerouslySetInnerHTML: { __html: `
                  ${css}
                  <style type="text/css">
                  .iherb-responsive * {
                      -moz-box-sizing: border-box;
                      box-sizing: border-box;
                  }
                  </style>
                  ${ReactDOMServer.renderToStaticMarkup(meta({name:'viewport', content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}))}
                `}}
                ),
                body(null,
              
              script({ dangerouslySetInnerHTML: { __html:`
                window._language = '${language}';
                window._currency = '${currency}';
                window._country = '${country}';
                window._customerId = '${id}';
                window._checkoutAPI = '${checkout}';
                window._myaccountAPI = '${myaccount}';
                window._basePath = '${basePath}';
                var appPay = false;
                window.iHerb_ActionHost = 'http://checkout4.iherbtest.com:8080';
              `}}),

              script({src: 'https://s.images-iherb.com/js/vendor/jquery-1.11.2.min.js' }),

              div({ dangerouslySetInnerHTML: { __html:headerHtml + '<div id="root" style="display:table"></div>' + footerHtml }}),

              // div({id: 'root', style:{ display:'table' }, dangerouslySetInnerHTML: {__html:''
              //   //ReactDOMServer.renderToString(App(props))
              // }}),

              // ReactDOMServer.hydrate( footerHtml ),
              //div({ dangerouslySetInnerHTML: { __html:footerHtml] }}),
              
              // script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js'}),
              // script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js'}),
              div({dangerouslySetInnerHTML: { __html: js}}),
              script({src: bundlePath})
              //script({src: 'http://localhost:8080/bundle.web.js'}),
             // script({src: 'https://s.images-iherbtest.com/m/js/app.mobile.min_4c26b94a7311f3ed0519687f2338059e.js'})
            )))

            res.end(htmlRes)
          })
        })
      })
    })
  } else if (req.url == bundlePath) {

    res.setHeader('Content-Type', 'text/javascript')
    if(dev)
      forwardHttp('localhost:8080/bundle.web.js', '', response => res.end(response))
    else
      res.end(bundle)
    
  } else if (req.url == bundlePath + '.map') {
    
    res.setHeader('Content-Type', 'text/javascript')
    if(dev)
      forwardHttp('localhost:8080/bundle.web.js.map', '', response => res.end(response))
    else
      res.end()
  } 

// The http server listens on port 3000
}).listen(443, function(err) {
  if (err) throw err
  console.log("Checkout API: " + checkout)
  console.log("MyAccount API: " + myaccount)
  console.log("Content API: " + content)
  console.log("Bundle Path: " + bundlePath)
  console.log('Listening on 3000...')
})

function parseCookies (request) {
  var list = {},
      rc = request.headers.cookie;

  rc && rc.split(';').forEach(function( cookie ) {
      var parts = cookie.split('=');
      list[parts.shift().trim()] = parseSubCookies(decodeURI(parts.join('=')));
  });

  return list;
}

function parseSubCookies (request) {
  var list = {},
      rc = request;

  rc && rc.split('&').forEach(function( cookie ) {
      var parts = cookie.split('=');
      list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}

function forward(base, req, cb) {
  
  const url = base + (req && req.url)
  var options = {
    host: base,
    path: req.url,
    method: 'GET',
    headers: req.headers
  }

  console.log(options)
  
    http.get(req, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        cb(body);
      });
    });
  
}

function forwardBundle(req, res, cb) {
  
  if(/\.map$/g.test(req.url)){
    res.writeHead(302, {'Location': 'https://localhost:8080/bundle.web.js.map'});
    res.end();
    //forwardBundleSecure('/bundle.web.js.map', req, cb)
  }
  else {
    res.writeHead(302, {'Location': 'https://localhost:8080/bundle.web.js'});
    res.end();
    //forwardBundleSecure('/bundle.web.js', req, cb)
  }
}

function forwardBundleSecure(path, req, cb) {
  
  var options = {
    hostname: 'localhost',
    port: 8080,
    path: path,
    method: req.method,
    agent: false
  };
  const request = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      cb(body)
    });
  });
  
  request.on('error', (e) => {
    console.error(e);
  });
  request.end();
}

function forwardHttp(base, req, cb) {
  
  const url = base + (req && req.url)


  http.get('http://' + url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        cb(body);
      });
  });
}

function forwardHttps(req, cb) {
  var options = {
    hostname: 'localhost',
    port: 4443,
    path: req.url,
    method: req.method,
    agent: false
  };
  const request = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      cb(body, res.headers['set-cookie'] && res.headers['set-cookie'].map(cookie => 
        cookie.replace(/domain=[^;]+/g, 'domain=localhost')))
    });
  });
  
  request.on('error', (e) => {
    console.error(e);
  });
  request.end();
}

function header(req, country,  language, currency, cb) {
  var options = {
    host: host,
    port: 443,
    path: `/content/header?cc=${country}&lc=${language}&curc=${currency}`,
    method: 'GET',
    headers: {
      ['user-agent']: `Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/60`
    }
};
  https.get(options, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      const $ = cheerio.load(body)
      //shopping-cart-amount
      //iherb-hamburger-menu-account-name
      var cookies = parseCookies(req);
      
      var temse = cookies['ihr-temse'],
          inventory = temse && temse['bi'],
          temp = cookies['ihr-session-id1'],
          wel = temp && temp['wel'],
          name = wel && Buffer.from(wel, 'base64').toString();

      if(name) {
        $('.iherb-hamburger-menu-account-name').text(name)
        $('.logged-in').removeClass('hide')
        $('.logged-out').addClass('hide')
        $('.iherb-my-account').html('<i class="icon-myaccountmobile iherb-account-login"></i>')
      }

      if(inventory)
        $('.iherb-shopping-cart').append(`<span class="shopping-cart-amount">${inventory}</span>`)

      cb($.html());
    });
  });
}

function footer(country,  language, currency, cb) {
  var options = {
    host: host,
    port: 443,
    path: `/content/footer?cc=${country}&lc=${language}&curc=${currency}`,
    method: 'GET',
    headers: {
        ['user-agent']: `Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/60`
    }
};
  https.get(options, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      cb(body);
    });
  });
}

function jsbundle(cb) {
  var options = {
    host: host,
    port: 443,
    path: `/content/jsbundle`,
    method: 'GET',
    headers: {
        ['user-agent']: `Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/60`
    }
};
  https.get(options, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      cb(body);
    });
  });
}

function cssbundle(cb) {
  var options = {
    host: host,
    port: 443,
    path: `/content/cssbundle`,
    method: 'GET',
    headers: {
        ['user-agent']: `Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/60`
    }
};
  https.get(options, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      cb(body);
    });
  });
}
