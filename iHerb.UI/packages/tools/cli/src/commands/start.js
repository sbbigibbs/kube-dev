'use strict'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

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
const createDevConfig = require('../../config/webpack.config.dev')
const createDevNativeConfig = require('../../config/webpack.config.native.dev')
import paths from '../config/paths'
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const getClientEnvironment = require('../config/env')
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
import runServer from './server'

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/'
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = ''
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl)

export default function buildDev(opts) {
  opts || (opts = {})

  let moduleResolver = {}
  if (opts.moduleResolverAliasName && opts.moduleResolverAliasVal) {
    moduleResolver.alias = {
      name: opts.moduleResolverAliasName,
      val: getAppSrc(opts.moduleResolverAliasVal),
    }
  }

  var polyfill = require.resolve('../config/polyfills')
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
    appSrcs: _.map(opts.src || [ null ], (src) => {
      return getAppSrc(src)
    }), // src
    moduleResolver: moduleResolver,
    appNodeModules: getAppNodeModules(),
    publicUrl: getPublicUrl(opts.publicUrl),
    servedPath: getServedPath(),
    stringified: env.stringified,
    raw: env.raw,
    publicPath,
    polyfill,
  }, paths)

  // Warn and crash if required files are missing
  if (!checkRequiredFiles([
    opts.appIndex,
  ])) {
    process.exit(1)
  }

  const config = createDevConfig(opts)
  _.defaults(config, {
    externals: [],
  })

  if (opts.modules) {
    // exclude react and react-dom from the build
    config.externals.push({
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        umd: 'react-dom',
      },
    })
    cfg.output.libraryTarget = opts.libraryTarget

    if (!_.isArray(config.plugins))
      config.plugins = []

    config.plugins.push(new webpack.WatchIgnorePlugin([
        /\.d\.ts$/
    ]))
  }

  var exts = _.clone(config.resolve.extensions)
  var entry = _.clone(config.entry)
  _.reduce(opts.platforms, (promise, platform) => {
    return promise.then((result) => {
      if (platform !== 'main') {
        config.resolve.extensions = exts.map(ext => {
          return `.${platform}${ext}`
        }).concat(exts)

        config.entry = {}
        if (_.isString(entry) || _.isArray(entry))
          config.entry[platform] = entry

        if (opts.start) return {
          cfg: config,
          warnings: [],
          stats: {},
        }

        return compile(config, platform)
      } else {
        config.resolve.extensions = exts
        config.entry = entry

        if (opts.start) return {
          cfg: config,
          warnings: [],
          stats: {},
        }

        return compile(config, 'main')
      }
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
    .then((result) => {
      // TODO Limitation is we can only start one platform bundle,
      // luckily for us that's the result of the last promise.
      if (opts.start) {
        runServer(result.cfg, opts)
      }
    })
}

function compile(cfg, platform) {
  console.log(cfg)
  console.log(format('Creating development build[%s]...', platform))

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
