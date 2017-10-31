'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

// Ensure environment variables are read.
require('../config/env')

export default function test(platforms, opts) {
  opts || (opts = {})
  platforms || (platforms = [])
  const argv = process.argv.slice(2)

  var polyfill = require.resolve('../config/polyfills')
  _.defaults(opts, {
    appIndex: opts.source ? resolveApp(opts.source) : undefined,
    appBuild: opts.output ? resolveApp(opts.output) : undefined,
    // Some apps do not use client-side routing with pushState.
    // For these, "homepage" can be set to "." to enable relative asset paths.
    shouldUseRelativeAssetPaths: publicPath === './',
    // Source maps are resource heavy and can cause out of memory issue for large source files.
    shouldUseSourceMap: process.env.GENERATE_SOURCEMAP !== 'false',
    stringified: env.stringified,
    raw: env.raw,
    publicPath,
    publicUrl,
    polyfill,
  }, paths)

  // Watch unless on CI or in coverage mode
  if (!process.env.CI && argv.indexOf('--coverage') < 0) {
    argv.push('--watch')
  }

  console.log('Not Implemented Yet')
}
