'use strict'

const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const _ = require('lodash')

// This is the development configuration.
// It is focused on developer experience and fast rebuilds.
// The production configuration is different and lives in a separate file.
module.exports = function (opts) {
  return {
    // These are the "entry points" to our application.
    // This means they will be the "root" imports that are included in JS bundle.
    // The first two entry points enable "hot" CSS and auto-refreshes for JS.
    entry: [
      // We ship a few polyfills by default:
      opts.polyfill,
      // Errors should be considered fatal in development
      require.resolve('react-error-overlay'),
      // Finally, this is your app's code:
      opts.appIndex,
      // We include the app code last so that if there is a runtime error during
      // initialization, it doesn't blow up the WebpackDevServer client, and
      // changing JS code would still trigger a refresh.
    ],
    output: {
      // Next line is not used in dev but WebpackDevServer crashes without it:
      path: opts.appBuild,
      // Add /* filename */ comments to generated require()s in the output.
      pathinfo: true,
      // This does not produce a real file. It's just the virtual path that is
      // served by WebpackDevServer in development. This is the JS bundle
      // containing code from all our entry points, and the Webpack runtime.
      // filename: `static/js/${opts.outputName}.[name].js`,
      // There are also additional JS chunk files if you use code splitting.
      // chunkFilename: `static/js/${opts.outputName}.[name].chunk.js`,
      // This is the URL that app is served from. We use "/" in development.
      publicPath: opts.publicPath,
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    resolve: {
      // This allows you to set a fallback for where Webpack should look for modules.
      // We placed these paths second because we want `node_modules` to "win"
      // if there are any conflicts. This matches Node resolution mechanism.
      // https://github.com/facebookincubator/create-react-app/issues/253
      modules: ['node_modules', opts.appNodeModules].concat(
        // It is guaranteed to exist because we tweak it in `env.js`
        process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
      ),
      // These are the reasonable defaults supported by the Node ecosystem.
      // We also include JSX as a common component filename extension to support
      // some tools, although we do not recommend using it, see:
      // https://github.com/facebookincubator/create-react-app/issues/290
      // `web` extension prefixes have been added for better support
      // for React Native Web.
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      alias: {
        // Resolve Babel runtime relative to react-scripts.
        // It usually still works on npm 3 without this but it would be
        // unfortunate to rely on, as react-scripts could be symlinked,
        // and thus babel-runtime might not be resolvable from the source.
        'babel-runtime': path.dirname(
          require.resolve('babel-runtime/package.json')
        ),
      },
    },
    module: {
      strictExportPresence: true,
      rules: [
        // TODO: Disable require.ensure as it's not a standard language feature.
        // We are waiting for https://github.com/facebookincubator/create-react-app/issues/2176.
        // { parser: { requireEnsure: false } },

        // First, run the linter.
        // It's important to do this before Babel processes the JS.
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                formatter: eslintFormatter,
                eslintPath: require.resolve('eslint'),
                baseConfig: {
                  extends: [require.resolve('eslint-config-react-app')],
                },
                ignore: false,
                useEslintrc: false,
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          include: opts.appSrcs,
        },
        {
          // "oneOf" will traverse all following loaders until one will match
          // the requirements. When no loader matches it will fall back to the
          // "file" loader at the end of the loader list.
          oneOf: [
            // Process JS with Babel.
            {
              test: /\.jsx?$/,
              include: opts.appSrcs,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                presets: [
                  'react-native',
                ],
                plugins: genPluginModuleResolver(opts),
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
              },
            },
            // Process TS with TypeScript.
            {
              test: /\.tsx?$/,
              include: opts.appSrcs,
              loader: require.resolve('awesome-typescript-loader'),
              options: {
                target: 'es2015',
                module: 'es2015',
                jsx: 'react-native',
                // declaration: true,
                // sourceMap: true,
                // outFile: "./",
                // outDir: './lib',
                // rootDir: './src',
                removeComments: false,
                // noEmit: true,
                // importHelpers: true,
                // downlevelIteration: true,
                // isolatedModules: true,
                strict: false,
                noImplicitAny: false,
                strictNullChecks: false,
                noImplicitThis: false,
                alwaysStrict: false,
                moduleResolution: 'node',
                // baseUrl: "./",
                // paths: {},
                // rootDirs: [],
                // typeRoots: [],
                // types: [],
                allowSyntheticDefaultImports: true,
                // sourceRoot: "./",
                // mapRoot: "./",
                // inlineSourceMap: true,
                // inlineSources: true,
                experimentalDecorators: true,
                // emitDecoratorMetadata: true,
                plugins: genPluginModuleResolver(opts),
              },
            },
            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            // This loader don't uses a "test" so it will catch all modules
            // that fall through the other loaders.
            {
              // Exclude `js` files to keep "css" loader working as it injects
              // it's runtime that would otherwise processed through "file" loader.
              // Also exclude `html` and `json` extensions so they get processed
              // by webpacks internal loaders.
              exclude: [/\.js$/, /\.html$/, /\.json$/],
              loader: require.resolve('file-loader'),
              options: {
                name: `static/media/${opts.outputName}.[name].[hash:8].[ext]`,
              },
            },
          ],
        },
        // ** STOP ** Are you adding a new loader?
        // Make sure to add the new loader(s) before the "file" loader.
      ],
    },
    plugins: [
      // Makes some environment variables available to the JS code, for example:
      // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
      new webpack.DefinePlugin(opts.stringified),
      // Watcher doesn't work well if you mistype casing in a path so we use
      // a plugin that prints an error when you attempt to do this.
      // See https://github.com/facebookincubator/create-react-app/issues/240
      new CaseSensitivePathsPlugin(),
      // If you require a missing module and then `npm install` it, you still have
      // to restart the development server for Webpack to discover it. This plugin
      // makes the discovery automatic so you don't have to restart.
      // See https://github.com/facebookincubator/create-react-app/issues/186
      new WatchMissingNodeModulesPlugin(opts.appNodeModules),
      // Moment.js is an extremely popular library that bundles large locale files
      // by default due to how Webpack interprets its code. This is a practical
      // solution that requires the user to opt into importing specific locales.
      // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
      // You can remove this if you don't use Moment.js:
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('development'),
          'CART_API_URL': JSON.stringify(process.env.CART_API_URL)
        }
      })
      // chunk plugin
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   minChunks(module, count) {
      //     var context = module.context;
      //     return context && context.indexOf('node_modules') >= 0;
      //   },
      // }),
    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    // Turn off performance hints during development because we don't do any
    // splitting or minification in interest of speed. These warnings become
    // cumbersome.
    performance: {
      hints: false,
    },
  }
}
