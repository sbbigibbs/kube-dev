'use strict'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

// Ensure environment variables are read.
require('../config/env')

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const os = require('os')
const chalk = require('chalk')
const fs = require('fs-extra')
const createDevServerConfig = require('../../config/webpackDevServer.config')
const clearConsole = require('react-dev-utils/clearConsole')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')

const isInteractive = process.stdout.isTTY

import _ from 'lodash'

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'

export default function server(config, opts) {
  return choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port == null) {
      // We have not found a port.
      return
    }
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
    const appName = require(opts.appPackageJson).name
    const urls = prepareUrls(protocol, HOST, port)
    const useYarn = fs.existsSync(opts.yarnLockFile)
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler(webpack, config, appName, urls, useYarn)
    // Load proxy config
    const proxySetting = require(opts.appPackageJson).proxy
    const proxyConfig = prepareProxy(proxySetting, opts.appPublic)
    // Serve webpack assets generated by the compiler over a web sever.
    const serverConfig = createDevServerConfig(
      proxyConfig,
      urls.lanUrlForConfig,
      config,
      opts
    )
    _.assignIn(serverConfig, {
      clientLogLevel: 'info',
    })
    console.log('webpackConfig=', config, null, 2)
    console.log('serverConfig=', JSON.stringify(serverConfig, null, 2))
    const devServer = new WebpackDevServer(compiler, serverConfig)
    // Launch WebpackDevServer.
    devServer.listen(port, HOST, err => {
      if (err) {
        return console.log(err)
      }
      // if (isInteractive) {
      //   clearConsole()
      // }
      console.log(chalk.cyan('Starting the development server...\n'))
      openBrowser(urls.localUrlForBrowser)
    })

    _.forEach(['SIGINT', 'SIGTERM'], (sig) => {
      process.on(sig, function() {
        devServer.close()
        process.exit()
      })
    })
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  })
}
