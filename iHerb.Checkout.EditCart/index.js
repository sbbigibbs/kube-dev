var http = require('http'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script
    //App = React.createFactory(require('./App'))
    
http.createServer(function(req, res) {
  if (req.url == '/') {

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    var html = ReactDOMServer.renderToStaticMarkup(body(null,

      div({id: 'root', dangerouslySetInnerHTML: {__html:
        //ReactDOMServer.renderToString(App(props))
      }}),

      script({dangerouslySetInnerHTML: {__html:
        'var APP_PROPS = ' + safeStringify(props) + ';'
      }}),

      script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js'}),
      script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js'}),
      script({src: '/bundle.js'})

    ))

    res.end(html)
  } else if (req.url == '/bundle.js') {

    res.setHeader('Content-Type', 'text/javascript')

    
  } else {
    res.statusCode = 404
    res.end()
  }

// The http server listens on port 3000
}).listen(3000, function(err) {
  if (err) throw err
  console.log('Listening on 3000...')
})
