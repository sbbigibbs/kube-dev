const path = require('path');
const webpack = require('webpack');
const tsplugin = require('awesome-typescript-loader');
var ManifestPlugin = require('webpack-manifest-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    //entry: ["./index.js"],
    //entry: "./index.tsx",
    output: {
        filename: "bundle[name].js",
        chunkFilename: 'chunk[name].js',
        path: path.join(process.cwd(), "/dist"),
        publicPath: 'http://localhost:3000/',
        //libraryTarget: "commonjs-module"
        libraryTarget: 'commonjs2'
    },
    
    devtool: "source-map",
    resolveLoader : {
        modules: [ path.join(__dirname, 'node_modules/')]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        plugins:[ new tsplugin.TsConfigPathsPlugin( {
            baseUrl: process.cwd(),
            compiler: 'typescript'
        }) ],
        extensions: [" ", ".ts", ".tsx", ".css", ".jsx", ".js", ".json"],
        modules: [path.resolve(process.cwd(), "./src"),'node_modules'],
        alias: {
            'react-native': 'react-native-web'
        //     "iherb-api": './dist/src/ui/api/index',
        //     "iherb-components": path.relative(__dirname, "../../../dist/src/ui/components/index"),
        //     "iherb-containers": path.relative(__dirname, "../../../dist/src/ui/containers/index"),
        //     "iherb-redux": path.relative(__dirname, "../../../dist/src/ui/redux/index"),
        //    // "iherb-sagas":path.resolve(process.cwd(), "./src/ui/sagas/index"),
        //     "iherb-selectors": path.relative(__dirname, "../../../dist/src/ui/selectors/index"),
        //     "iherb-translations": path.relative(__dirname, "../../../dist/src/ui/translations/index")
        }
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
                                path.resolve(process.cwd(), './node_modules/babel-preset-es2015'),  
                                { "modules": false }
                            ],
                            path.resolve(process.cwd(), './node_modules/babel-preset-react'), 
                            //'react-hmre',
                            //"react-native-stage-0"
                        ],
                        plugins: [
                            path.resolve(process.cwd(), './node_modules/babel-plugin-syntax-dynamic-import'),
                            //'babel-plugin-syntax-dynamic-import',
                            //'react-hot-loader/babel'
                            //path.resolve(__dirname, './node_modules/', './react-hot-loader/babel')
                        ]
                    }
                }
                ]
            },
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: [
                {
                    loader: 'babel-loader' ,
                    options: { 
                        presets: [
                            [
                                path.resolve(process.cwd(), './node_modules/babel-preset-es2015'),  
                                { "modules": false }
                            ],
                            path.resolve(process.cwd(), './node_modules/babel-preset-react'), 
                            //'react-hmre',
                            //"react-native-stage-0"
                        ],
                        plugins: [
                            path.resolve(process.cwd(), './node_modules/babel-plugin-syntax-dynamic-import'),
                            path.resolve(process.cwd(), './node_modules/react-hot-loader/babel'),
                            //path.resolve(__dirname, './node_modules/', './react-hot-loader/babel')
                        ]
                    }
                },
                'awesome-typescript-loader'
                
              ]
            }
        ]
    },

    plugins: [
        
        new webpack.optimize.CommonsChunkPlugin({
            //names: ["app", "subPageA"]
            // (choose the chunks, or omit for all chunks)
          
            children: true,
            // (use all children of the chunk)
          
            async: true,
            // (create an async commons chunk)
          
            // minChunks: 3,
            // (3 children must share the module before it's separated)
          }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': `"web"`,

            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
          })
    ],
    

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: [
        'react',
        'react-dom',
        'react-redux',
        'redux',
        'react-native-web',
        'react-primitives',
        ///^iherb-.+$/,
    ],
};
