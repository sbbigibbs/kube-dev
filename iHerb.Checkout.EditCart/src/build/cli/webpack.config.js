const path = require('path');
const webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //entry: ["./index.js"],
    //entry: "./index.tsx",
    output: {
        filename: "bundle[name].js",
        chunkFilename: "chunk[name].js",
        path: path.join(process.cwd(), "/dist")
        //publicPath: '/'
        //libraryTarget:'commonjs'
    },
    
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [" ", ".ts", ".tsx", ".css", ".jsx", ".js", ".json"],
        //modules: ['src/', path.join(process.cwd(), 'node_modules/'), path.join(__dirname, 'node_modules/')],
        alias: {
            //'react-native': 'react-native-web',
            'react':'preact-compat',
            'react-dom': 'preact-compat',
            'react-native': 'react-native-web',
            'primitives-loader': path.join(__dirname, 'src/loaders/postcss.js'),
            'testLoader': path.resolve(__dirname, './src/webpack/lib/loaders/TestLoader.js'),
            "iherb-api": path.resolve(process.cwd(), "./src/ui/api/index"),
            "iherb-components": path.resolve(process.cwd(), "./src/ui/components/index"),
            "react-primitives": path.resolve(process.cwd(), "./src/ui/primitives/index"),
            "iherb-containers": path.resolve(process.cwd(), "./src/ui/containers/index"),
            "iherb-redux": path.resolve(process.cwd(), "./src/ui/redux/index"),
            "iherb-sagas": path.resolve(process.cwd(), "./src/ui/sagas/index"),
            "iherb-selectors": path.resolve(process.cwd(), "./src/ui/selectors/index"),
            "iherb-translations": path.resolve(process.cwd(), "./src/ui/translations/index")
        },
        plugins: [
            
        ]
        //modules: ['src/', 'node_modules/'],
    },

    module: {
        rules: [

            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                use: [
                    //'react-hot-loader/webpack',
                    {
                        loader: 'babel-loader' ,
                        options: { 
                            presets: [
                                [
                                    path.resolve(__dirname, '../../../node_modules/', './babel-preset-es2015'),  
                                    { "modules": false }
                                ],
                                path.resolve(__dirname, '../../../node_modules/', './babel-preset-react'), 
                                //'react-hmre',
                                //"react-native-stage-0"
                            ],
                            plugins: [
                                
                                //'react-hot-loader/babel',
                                path.resolve(__dirname, '../../../node_modules/', './babel-plugin-dynamic-import-webpack'),
                                //path.resolve(__dirname, '../../../node_modules/', './react-hot-loader/babel')
                            ]
                        }
                    }
                ]
            },
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: [
                //'react-hot-loader/webpack',
                {
                    loader: 'babel-loader' ,
                    options: { 
                        presets: [
                            [
                                path.resolve(__dirname, '../../../node_modules/', './babel-preset-es2015'),  
                                { "modules": false }
                            ],
                            path.resolve(__dirname, '../../../node_modules/', './babel-preset-react'), 
                            //'react-hmre',
                            //"react-native-stage-0"
                        ],
                        plugins: [
                            path.resolve(__dirname, '../../../node_modules/', './babel-plugin-dynamic-import-webpack'),
                            //'react-hot-loader/babel'
                            //path.resolve(__dirname, '../../../node_modules/', './react-hot-loader/babel')
                        ]
                    }
                }
              ],
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            //names: ["app", "subPageA"]
            // (choose the chunks, or omit for all chunks)
          
            children: true,
            // (use all children of the chunk)
          
            async: true,
            // (create an async commons chunk)
          
            // minChunks: 3,
            // (3 children must share the module before it's separated)
          })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "manifest",
        //     minChunks: Infinity
        // })
    ],
    

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: [],
};
