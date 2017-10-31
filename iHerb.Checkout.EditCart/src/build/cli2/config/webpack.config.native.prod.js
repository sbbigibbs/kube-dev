'use strict'

const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')
const eslintFormatter = require('react-dev-utils/eslintFormatter')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const _ = require('lodash')

// Note: defined here because it will be used more than once.

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = function (opts) {
  // Assert this just to be safe.
  // Development builds of React are slow and not intended for production.
  if (opts.stringified['process.env'].NODE_ENV !== '"production"') {
    throw new Error('Production builds must have NODE_ENV=production.')
  }

  return {
    // Don't attempt to continue if there are any errors.
    bail: true,
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: opts.shouldUseSourceMap ? 'source-map' : false,
    entry: [
      opts.appIndex,
    ],
    output: {
      // The build folder.
      path: opts.appBuild,
      // Generated JS file names (with nested folders).
      // There will be one main bundle, and one file per asynchronous chunk.
      // We don't currently advertise code splitting but Webpack supports it.
      filename: `${opts.outputName}.[name].js`,
      chunkFilename: `${opts.outputName}.[name].chunk.js`,
      // Point sourcemap entries to original disk location (format as URL on Windows)
      devtoolModuleFilenameTemplate: info =>
        path
          .relative(opts.appSrc, info.absoluteResourcePath)
          .replace(/\\/g, '/'),
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
      plugins: [
        // Prevents users from importing files from outside of src/ (or node_modules/).
        // This often causes confusion because we only process files within src/ with babel.
        // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
        // please link the files into your node_modules/ and let module-resolution kick in.
        // Make sure your source files are compiled, as they will not be processed in any way.
        new ModuleScopePlugin(opts.appSrc, [opts.appPackageJson]),
      ],
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
                // TODO: consider separate config for production,
                // e.g. to enable no-console and no-debugger only in production.
                baseConfig: {
                  extends: [require.resolve('eslint-config-react-app')],
                },
                ignore: false,
                useEslintrc: false,
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          include: opts.appSrc,
        },
        {
          // "oneOf" will traverse all following loaders until one will
          // match the requirements. When no loader matches it will fall
          // back to the "file" loader at the end of the loader list.
          oneOf: [
            // Process JS with Babel.
            {
              test: /\.(js|jsx)$/,
              include: opts.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                presets: ['react-native'],
                compact: true,
              },
            },
            // Process TS with TypeScript.
            {
              test: /\.tsx?$/,
              include: opts.appSrc,
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
              },
            },
            // ** STOP ** Are you adding a new loader?
            // Make sure to add the new loader(s) before the "file" loader.
          ],
        },
      ],
    },
    plugins: [
      // Makes some environment variables available to the JS code, for example:
      // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
      // It is absolutely essential that NODE_ENV was set to production here.
      // Otherwise React will be compiled in the very slow development mode.
      new webpack.DefinePlugin(opts.stringified),
      // // Minify the code.
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //     warnings: false,
      //     // Disabled because of an issue with Uglify breaking seemingly valid code:
      //     // https://github.com/facebookincubator/create-react-app/issues/2376
      //     // Pending further investigation:
      //     // https://github.com/mishoo/UglifyJS2/issues/2011
      //     comparisons: false,
      //   },
      //   output: {
      //     comments: false,
      //     // Turned on because emoji and regex is not minified properly using default
      //     // https://github.com/facebookincubator/create-react-app/issues/2488
      //     ascii_only: true,
      //   },
      //   sourceMap: opts.shouldUseSourceMap,
      // }),
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
  }
}
