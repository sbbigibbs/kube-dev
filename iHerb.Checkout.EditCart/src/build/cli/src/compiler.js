const webpack = require('webpack');
const fs = require('fs');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const config = require('../webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const moduleConfig = require('../webpack.config.module.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var http = require('http');
var findSyms = require('./symlinks');
var express = require('express');
var app = express();

function getEntry(name, src, dev, modules) {
    var entry = {};
    entry[name] = [];

    if(dev) {
        entry[name].push('babel-polyfill'),
        entry[name].push('react-hot-loader/patch');
        entry[name].push('webpack-dev-server/client?https://localhost:8080'); //http://checkout4.iherbtest.com:3000/public');
        entry[name].push('webpack/hot/only-dev-server');
    } else {
        entry[name].push('babel-polyfill')
    }

    entry[name].push(path.resolve(process.cwd(), src));
    return entry;
}

function build(src, output, modules, dev, watch) {

//   if (!modules)  {
//       config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
//             names: '.vendor',
//             minChunks(module, count) {
//                 var context = module.context;
                
//                 return context && context.indexOf('node_modules') >= 0 &&
//                     context.indexOf('node_modules\\iherb') == -1;// &&
//                     //context.indexOf('node_modules\\webpack') == -1;
//             },
//         }))
//   }
    var links = findSyms(path.resolve(process.cwd(), './node_modules'))
    var entry = getEntry('web', src, dev, modules);

    moduleConfig.entry = entry
    moduleConfig.watch = watch;
    moduleConfig.output.path = path.join(process.cwd(), output)
    config.entry = entry;
    config.resolve.alias = { ...config.resolve.alias, ... links } 
    config.watch = watch;


    if(dev) {
        config.watch = dev;
        config.plugins.push(
            new UglifyJSPlugin({
                sourceMap: true
             }))
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
        config.devServer = {
            hot: true,
            hotOnly: true,
            inline: true,
            host: 'localhost',
            port: 8080,
            https: {
                key: fs.readFileSync('key.pem'),
                cert: fs.readFileSync('cert.pem')
            }
        }
        // config.externals = [
        //     function(context, request, callback) {
        //         if (context.indexOf('node_modules') !== -1){
        //           return callback(null, 'commonjs ' + request);
        //         } 
        //         callback();
        //       }
        // ]
    } else {
        config.plugins.push(
            new UglifyJSPlugin({}))
        config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
            name: '.common',
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
          }))
    }
    
    var compiler = webpack(config);
    if(modules)
        compiler = webpack(moduleConfig);

    if(dev) {
       const server = new WebpackDevServer(compiler, {
            contentBase:[
                process.cwd()
            ],
            inline: true,
            hot: true,
            historyApiFallback: true,
            hotOnly: true,
            //publicPath: '/static/',
            stats: {
                colors: true,
            },
            https: {
                key: fs.readFileSync('key.pem'),
                cert: fs.readFileSync('cert.pem')
            }
            //clientLogLevel: "none",
            //watchContentBase: true
            // watchOptions: {
            //     aggregateTimeout: 2000
            // }
        }); 

        server.listen(8080, "localhost", function() {
            //console.log(sc.inputFileSystem.hasCache(path.resolve(process.cwd(), './dist/bundle.web.js')));
            console.log("Starting server on http://localhost:8080");
        });
        
    } else {
        
        compiler.run((err, stats) => {
            if (err) {
                console.log(err);
            }
            console.log(stats)
        })
    }
}

module.exports = {
    build
}