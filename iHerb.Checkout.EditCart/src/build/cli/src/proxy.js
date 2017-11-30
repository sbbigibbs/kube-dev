var https = require('https'),
    fs = require('fs'),
    os = require('os'),
    path = require('path'),
    spawn = require("child_process").spawn,child;


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let open = false

const start = (callback) => {

    if(/^win/.test(os.platform()))
        child = spawn("powershell.exe",[path.resolve(__dirname, '../scripts/kubectl.ps1')]);
    else
        child = spawn("sh",[path.resolve(__dirname, '../scripts/kubectl.sh')]);

    child.stdout.on("data",function(data){
        console.log("Powershell Data: " + data);
        if(!open) {
            open = true;
            callback();
        }
    });
    child.stderr.on("data",function(data){
        console.log("Powershell Errors: " + data);
    });
    child.on("exit",function(){
        console.log('exit')
    });
    child.stdin.end();
}
    

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function(req, res) {
    if(!child || !child.stdout.readable) {
        open = false;
        start(() => forwardCalls(req, res));
    } else
        forwardCalls(req, res)    

}).listen(443, function(err) {
    if (err) throw err
        console.log('Listening on 443...')
})

function forwardCalls(req, res) {
    if(/\/cart\/public\/bundle\./g.test(req.url)) {
        if(/\.map$/g.test(req.url)){
            res.writeHead(302, {'Location': `https://localhost:8080/bundle.web.js.map`});
            res.end();
            }
        else {
            res.writeHead(302, {'Location': 'https://localhost:8080/bundle.web.js'});
            res.end();
        }
    }
    else if(/\/cart\/public\//g.test(req.url)) {
        var url = req.url.match(/\/[^\/]+$/g)[0];
        console.log(url)
        res.writeHead(302, {'Location': `https://localhost:8080${req.url.match(/\/[^\/]+$/)[0]}`});
        res.end();
    }
    else
        forwardHttps(req, (response, cookies) => { 
            if(cookies)
                res.setHeader('set-cookie', cookies); 
            res.end(response) 
        } )
}

function forwardHttps (req, cb) {
    var options = {
        hostname: 'localhost',
        port: 4443,
        path: req.url,
        method: req.method
    };
    const request = https.request(options, (res) => {
        let body = "";

        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.setEncoding("utf8");
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            if(res.headers['set-cookie'])
                cb(body, res.headers['set-cookie'].map(cookie => 
                    cookie.replace(/domain=[^;]+/g, 'domain=localhost')))
            else
                cb(body)
        });
    });

    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
}
