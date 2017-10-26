var http = require('http'),
    https = require('https'),
    checksum = require('checksum'),
    fs = require('fs'),
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
    
var bundle = fs.readFileSync('./dist/static/js/bundle.web.js');
var sum = checksum(bundle);

var checkout = process.argv.length >= 3 && process.argv[2] || "https://checkout-api.iherbtest.biz/v1",
    myaccount = process.argv.length >= 4 && process.argv[3] || "https://myaccount-api.iherbtest.biz/v1";

http.createServer(function(req, res) {
  console.log(req.url);

  if (req.url == '/EditCart') {

    var cookies = parseCookies(req);
    
    //console.log(cookies)
    var prefs = cookies['iher-pref1'],
        language = prefs && prefs['lan'] || 'en-US',
        currency = prefs && prefs['scurcode'] || 'USD',
        country = prefs && prefs['sccode'] || 'US',
        temp = cookies['ihr-temse'],
        id = temp && temp['tempses'];

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

      header(country, language, currency, (headerHtml) => {
        footer(country, language, currency, (footerHtml) => {
          //console.log(headerHtml),
          //console.log(footerHtml)
          var htmlRes = ReactDOMServer.renderToStaticMarkup(
            html({ className:'USA en shopping-cart mobile-web checkout ios' },
              head(null, 
                meta({name:'viewport', content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}),
                style({rel: 'stylesheet', type: 'text/css', 
                href: 'https://s.images-iherb.com/m/css/app.mobile.min_72b0468335b9e96c0d34361d94497fdf.css'})
              ),//     https://s.images-iherb.com/m/css/app.mobile.min_72b0468335b9e96c0d34361d94497fdf.css
              body(null,
            
            script({ dangerouslySetInnerHTML: { __html:`
              window._language = '${language}';
              window._currency = '${currency}';
              window._country = '${country}';
              window._customerId = '${id}';
              window._checkoutAPI = '${checkout}';
              window._myaccountAPI = '${myaccount}';
            `}}),

            script({src: 'https://s.images-iherb.com/js/vendor/jquery-1.11.2.min.js' }),

            div({ dangerouslySetInnerHTML: { __html:headerHtml + '<div id="root" style="display:table"></div>' + footerHtml }}),

            // div({id: 'root', style:{ display:'table' }, dangerouslySetInnerHTML: {__html:''
            //   //ReactDOMServer.renderToString(App(props))
            // }}),

            // ReactDOMServer.hydrate( footerHtml ),
            //div({ dangerouslySetInnerHTML: { __html:footerHtml] }}),
            
            script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js'}),
            script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js'}),
            script({src: '/public/bundle.' + sum +  '.js'}),
            script({src: 'https://s.images-iherb.com/m/js/app.mobile.min_4c26b94a7311f3ed0519687f2338059e.js'})
          )))

          res.end(htmlRes)
        })
      })

  } else if (req.url == '/public/bundle.' + sum + '.js') {

    res.setHeader('Content-Type', 'text/javascript')
    res.end(bundle)
    
  } else {
    //forward(req, response => res.end(response))
    // res.statusCode = 404
    // res.end()
  }

// The http server listens on port 3000
}).listen(3001, function(err) {
  if (err) throw err
  console.log("Checkout API: " + checkout)
  console.log("MyAccount API: " + myaccount)
  console.log('Listening on 3001...')
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

function forward(req, cb) {
  const url = 'https://checkout.iherbpreprod.com' + req.url
  https.get(url, res => {
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

function header(country,  language, currency, cb) {
  const url = `https://www.iherb.com/content/header?cc=${country}&lc=${language}&curc=${currency}`
  var options = {
    host: 'www.iherb.com',
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
      cb(body);
    });
  });
}

function footer(country,  language, currency, cb) {
  const url = `https://www.iherb.com/content/footer?cc=${country}&lc=${language}&curc=${currency}`
  var options = {
    host: 'www.iherb.com',
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