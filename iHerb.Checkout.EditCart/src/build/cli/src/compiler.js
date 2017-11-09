const webpack = require('webpack');
const fs = require('fs');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const config = require('../webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const moduleConfig = require('../webpack.config.module.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var http = require('http');
var express = require('express');
var app = express();

function getEntry(name, src, dev) {
    var entry = {};
    entry[name] = [];

    if(dev) {
        entry[name].push('babel-polyfill'),
        entry[name].push('react-hot-loader/patch');
        entry[name].push('webpack-dev-server/client?https://checkout4.iherbtest.com/public');
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

    moduleConfig.entry = getEntry('.web', src, dev);
    moduleConfig.watch = watch;
    config.entry = getEntry('.web', src, dev);
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
            host: 'checkout4.iherbtest.com',
            port: 8080
        }
        
    } else {
        config.plugins.push(
            new UglifyJSPlugin({}))
    }
    
    var compiler = webpack(config);
    var modCompiler = webpack(moduleConfig);

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
        })
    }
}

module.exports = {
    build
}