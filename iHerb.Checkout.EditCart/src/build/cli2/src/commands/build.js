'use strict'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

// Ensure environment variables are read.
require('../config/env')

const webpack = require('webpack')
const path = require('path')
const os = require('os')
const chalk = require('chalk')
const fs = require('fs-extra')
const format = require('util').format
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const createProdConfig = require('../../config/webpack.config.prod')
const createProdNativeConfig = require('../../config/webpack.config.native.prod')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const getClientEnvironment = require('../config/env')
import paths from '../config/paths'
import {
  checkRequiredFiles,
} from '../config/utils'
import {
  getDotEnv,
  getAppPath,
  getAppBuild,
  getAppPublic,
  getAppHtml,
  getAppIndex,
  getAppPackageJson,
  getAppSrc,
  getAppNodeModules,
  getPublicUrl,
  getServedPath,
} from '../config/utils'
import _ from 'lodash'

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1)
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl)

export default function buildProd(opts) {
  opts || (opts = {})

  let polyfill = require.resolve('../config/polyfills')
  _.defaults(opts, {
    platforms: [],
    libraryTarget: 'commonjs',
    outputName: 'bundle',
    dotenv: getDotEnv(opts.dotenv), // .env
    appPath: getAppPath('.'),  // .
    appBuild: getAppBuild(opts.output), // dist
    appPublic: getAppPublic(opts.public), // public
    appHtml: getAppHtml(opts.html), // public/index.html
    appIndex: getAppIndex(opts.source), // src/index.js
    appPackageJson: getAppPackageJson(),
    appSrc: getAppSrc(opts.src), // src
    appNodeModules: getAppNodeModules(),
    publicUrl: getPublicUrl(opts.publicUrl),
    servedPath: getServedPath(),
    // Some apps do not use client-side routing with pushState.
    // For these, "homepage" can be set to "." to enable relative asset paths.
    shouldUseRelativeAssetPaths: publicPath === './',
    // Source maps are resource heavy and can cause out of memory issue for large source files.
    shouldUseSourceMap: process.env.GENERATE_SOURCEMAP !== 'false',
    stringified: env.stringified,
    raw: env.raw,
    publicPath,
    polyfill,
  }, paths)

  const config = createProdConfig(opts)
  _.defaults(config, {
    externals: [],
  })

  const nativeConfig = createProdNativeConfig(opts)
  _.defaults(nativeConfig, {
    externals: [],
  })

  // possible external modules:
  // 'react-redux': 'react-redux',
  // 'redux': 'redux',
  // 'react-primitives': 'react-primitives',
  if (opts.modules) {
    _.forEach([
      config,
      nativeConfig,
    ], (cfg) => {
      // exclude react and react-dom from the build
      cfg.externals.push({
        'react-primitives': 'react-primitives',
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      })
      cfg.output.libraryTarget = opts.libraryTarget

      if (!_.isArray(cfg.plugins))
        cfg.plugins = []

      cfg.plugins.push(new webpack.WatchIgnorePlugin([
          /\.d\.ts$/
      ]))
    })
  }

  let groups = _.reduce(opts.platforms, (retval, platform) => {
    if (platform === 'android') {
      let cfg = _.cloneDeep(nativeConfig)
      cfg.externals.push({
        'react-primitives': 'react-primitives',
        'react-native': 'react-native',
      })

      retval.push({
        kind: 'native',
        platform: 'android',
        cfg: cfg,
        opts: opts,
      })
    } else if (platform === 'ios') {
      let cfg = _.cloneDeep(nativeConfig)
      cfg.externals.push({
        'react-primitives': 'react-primitives',
        'react-native': 'react-native',
      })

      retval.push({
        kind: 'native',
        platform: 'ios',
        cfg: cfg,
      })
    } else if (platform === 'sketch') {
      let cfg = _.cloneDeep(nativeConfig)
      cfg.externals.push({
        'react-primitives': 'react-primitives',
        'react-sketchapp': 'react-sketchapp',
      })

      retval.push({
        kind: 'native',
        platform: 'sketch',
        cfg: cfg,
      })
    } else if (platform === 'web') {
      let cfg = _.cloneDeep(config)
      cfg.externals.push({
        'react-primitives': 'react-primitives',
        'react-native-web': 'react-native-web',
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      })

      retval.push({
        kind: 'web',
        platform: 'web',
        cfg: cfg,
      })
    } else if (platform === 'default') {
      let cfg = _.cloneDeep(config)
      cfg.externals.push({
        'react-primitives': 'react-primitives',
        'react-native-web': 'react-native-web',
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom',
        },
      })

      retval.push({
        kind: 'web',
        platform: 'default',
        cfg: cfg,
      })
    }

    return retval
  }, [])

  return preCompile(groups, opts)
}

function preCompile(groups, opts) {
  return _.reduce(groups, (promise, group) => {
    return promise.then((result) => {
      let exts = _.clone(group.cfg.resolve.extensions)

      // files with platform suffix like index.android.js
      let entry = _.clone(group.cfg.entry)
      if (group.platform === 'default') {
        group.cfg.output.filename = `${opts.outputName}.js`
        group.cfg.output.chunkFilename = `${opts.outputName}.chunk.js`

        if (opts.analyze)
          group.cfg.plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: `report.html`,
          }))

      } else {
        group.cfg.entry = _.compact(_.map(group.cfg.entry, (item) => {
          if (!checkRequiredFiles([ item ]))
            return `${item}.${group.platform}`
        }))

        group.cfg.entry = {}
        if (_.isString(entry) || _.isArray(entry))
          group.cfg.entry[group.platform] = entry

        if (opts.analyze)
          group.cfg.plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename:  `report-${group.platform}.html`,
          }))
      }

      group.cfg.resolve.extensions = exts.map(ext => {
        return `.${group.platform}${ext}`
      }).concat(exts)

      return compile(group.kind, group.cfg, group.platform)
    })
    .then(({ cfg, stats, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'))
        console.log(warnings.join('\n\n'))
        console.log(
          '\nSearch for the ' +
            chalk.underline(chalk.yellow('keywords')) +
            ' to learn more about each warning.'
        )
        console.log(
          'To ignore, add ' +
            chalk.cyan('// eslint-disable-next-line') +
            ' to the line before.\n'
        )
      } else {
        console.log(chalk.green('Compiled successfully.\n'))
      }

      return {
        cfg,
      }
    },
    err => {
      console.log(chalk.red('Failed to compile.\n'))
      console.log(err)
      process.exit(1)
    })}, Promise.resolve())
}

// Create the production build and print the deployment instructions.
function compile(kind, cfg, platform) {
  // console.log(cfg)
  console.log(format('Creating an optimized production %s build[%s]...', kind, platform))

  let compiler = webpack(cfg)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }
      const messages = formatWebpackMessages(stats.toJson({}, true))
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1
        }
        return reject(new Error(messages.errors.join('\n\n')))
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        )
        return reject(new Error(messages.warnings.join('\n\n')))
      }
      return resolve({
        cfg,
        stats,
        warnings: messages.warnings,
      })
    })
  })
}
