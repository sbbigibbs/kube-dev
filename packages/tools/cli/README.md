# UI Tools Cli

 [![NPM version][npm-image]][npm-url]

> CLI for primitive React components across targets.

This is the official, stable version of _UI Tools Cli_.

## Getting Started

Options for adding _UI Tools Cli_ to your project:

- Associate the `@iherb` scope using: `npm config set @iherb:registry https://registry.iherb.net`
- Install with [npm](https://npmjs.org/): `npm install @iherb/ui-tools-cli`

## Using node.js libraries in React Native

Tools like [browserify](http://browserify.org) and [webpack](http://webpack.org) have made it easy to use code originally written for node.js in the browser environment. And even when developing exclusively for the browser, the node.js standard library has a lot to offer with a powerful [Buffer](https://nodejs.org/api/buffer.html) implementation that goes beyond what typed arrays can do, a [stream API](https://nodejs.org/api/stream.html), [URL parsing](https://nodejs.org/api/url.html), etc., making node.js an appealing target platform for any Javascript developer.

### The React Native packager

So where does that leave React Native? On paper, React Native is not necessarily tied to a particular packager, as it will happily load a Javascript bundle from a file or URL, regardless of how that bundle was prepared. So in theory, using `browserify` or `webpack` would be possible. In practice, though, things are a lot more complicated:

- React Native uses `Haste` modules internally. One can only hope that React Native will go the way of React and rewrite Haste requires to node-style requires at some point to level the playiing field for other packagers.

- As long as Facebook is using the React Native packager (as of May 2017 it has been separated into [metro-bundler](https://github.com/facebook/metro-bundler/)) internally, React Native will always work best with the React Native packager.

- React Native assumes you're using its own packager in various places. Some examples: The XCode project will automatically start the packager for you in debug mode, you don't get a say in it. The hot module reload support will automatically attempt WebSocket connections to the packager.

- Basically you need to compile everything to `index.ios.js` file, which is then transformed by `react-native`. Also, to stop webpack from trying to load native (Objective-C) components, you need to define them all as `externals` and set `libraryTarget: 'commonjs'` in webpack config, this way webpack will not resolve `require` to native components.

To cut a long story short, betting on the React Native packager makes a lot of sense.

So how can we use node.js libraries if we're stuck with the React Native packager?

## Custom transformers

The React Native packager has a little known pluggable component called a *transformer*. This is a function that takes a given source file and (typically using Babel) transforms it so that all the funky ES2015 syntax is replaced with stuff that JavaScriptCore can parse. We can supply our own transformer, use a Babel helper called [babel-plugin-rewrite-require](https://www.npmjs.com/package/babel-plugin-rewrite-require), and include browserify's reimplementation of node's core libraries to make any piece of code originally written for node.js runnable inside React Native's environment.

## How it works

1. Create a `rn-cli.config.js` file at the top of your React Native project. This file gets loaded by the React Native cli to load additional configuration. You can use it to specify various options that you'd otherwise have to pass via command line arguments. Using command line arguments doesn't always work, however. For instance, the XCode project will automatically call the packager without allowing you specify additional arguments. Check out the `rn-cli.config.js` file below for a list of possible options it can specify and their explanation.

```javascript
const blacklist = require('metro-bundler/src/blacklist')

module.exports = {

  /**
   * Add search paths to the packager. Equivalent to the
   * `--projectRoots` command line argument.
   *
   * Your app project directory is the default, but you can easily add
   * additional directories.
   *
   * This is very handy when you maintain all your software in one big
   * repo, which means your app's dependencies aren't necessarily just
   * located in `./node_modules` but potentially in sibling
   * directories or other locations.
   */
  getProjectRoots() {
    return [__dirname]
  },

  /**
   * Specify additional file extensions for assets. For example, if
   * you want to include a .ttf file, you would return ['ttf'] from
   * here and use `require('./fonts/example.ttf')` inside your app.
   *
   * Equivalent to the `--assetExts` command line argument.
   */
  getAssetExts() {
    return []
  },

  /**
   * Specify any additional platforms to be used by the packager.
   * For example, if you want to add a "custom" platform, and use modules
   * ending in .custom.js, you would return ['custom'] here.
   *
   * Equivalent to the `--platforms` command line argument.
   */
  getPlatforms() {
    return []
  },

  /**
   * The React Native packager can be a bit fussy. For instance, it
   * does not like come across duplicate packages. It can also be slow
   * to traverse deep directory structures that you know won't have
   * app dependencies in them. Putting those directories on the
   * blacklist will stop the packager from traversing into them.
   */
  getBlacklistRE() {
    const additionalBlacklist = [
      /ignore-this-directory\/.*/,
    ]
    return blacklist(additionalBlacklist)
  },

  /**
   * This is the bombshell. New in React Native 0.30, this allows you
   * to specify your own code transformer.
   *
   * In essense, instead of specifying your own `.babelrc` file,
   * you'll want to specify your own transformer. That way, when
   * running a regular node program such as the packager itself, the
   * special transforms your app needs won't be applied.
   *
   * Equivalent to the `--transformer` command line argument.
   */
  getTransformModulePath() {
    return require.resolve('./transformer')
  },
}
```

2. Provide your own transformer implementation. Check out `transformer.js` below for an example that uses [babel-plugin-rewrite-require](https://www.npmjs.com/package/babel-plugin-rewrite-require) to rewrite imports of core node.js modules to their browserify equivalents. The browserify polyfills are installed via the `node-libs-browser` package. npm3 is required to install this project so that all dependencies are installed in a flat directory structure.

```javascript
const babel = require('babel-core')

/**
 * This is your `.babelrc` equivalent.
 */
const babelRC = {
  presets: [require('babel-preset-react-native')],
  plugins: [
    // The following plugin will rewrite imports. Reimplementations of node
    // libraries such as `assert`, `buffer`, etc. will be picked up
    // automatically by the React Native packager.  All other built-in node
    // libraries get rewritten to their browserify counterpart.
    [require('babel-plugin-rewrite-require'), {
      aliases: {
        constants: 'constants-browserify',
        crypto: 'crypto-browserify',
        dns: 'node-libs-browser/mock/dns',
        domain: 'domain-browser',
        fs: 'node-libs-browser/mock/empty',
        http: 'stream-http',
        https: 'https-browserify',
        net: 'node-libs-browser/mock/net',
        os: 'os-browserify/browser',
        path: 'path-browserify',
        querystring: 'querystring-es3',
        stream: 'stream-browserify',
        _stream_duplex: 'readable-stream/duplex',
        _stream_passthrough: 'readable-stream/passthrough',
        _stream_readable: 'readable-stream/readable',
        _stream_transform: 'readable-stream/transform',
        _stream_writable: 'readable-stream/writable',
        sys: 'util',
        timers: 'timers-browserify',
        tls: 'node-libs-browser/mock/tls',
        tty: 'tty-browserify',
        vm: 'vm-browserify',
        zlib: 'browserify-zlib',

        // You can add your own, much like webpack aliases:
        'corporate-lib': 'corporate-lib-react-native',

        // You can also mock any libraries that you don't need to support on
        // React Native, but have to be present for 3rd party code to work:
        'some-third-party-dependency': 'node-libs-browser/mock/empty',
      },
      throwForNonStringLiteral: true,
    }],
  ],
}

function transform(src, filename, options) {
  const babelConfig = Object.assign({}, babelRC, {
    filename,
    sourceFileName: filename,
  })
  const result = babel.transform(src, babelConfig)
  return {
    ast: result.ast,
    code: result.code,
    map: result.map,
    filename: filename,
  }
}

module.exports = function(data, callback) {
  let result
  try {
    result = transform(data.sourceCode, data.filename, data.options)
  } catch (e) {
    callback(e)
    return
  }
  callback(null, result)
}
```

3. Ensure you're injecting the necessary symbols into the global namespace. A lot of node.js libraries expect `Buffer` and `process` (among others) to be available in the global namespace. See `global.js` below for an example.

```javascript
// Inject node globals into React Native global scope.
global.Buffer = require('buffer').Buffer
global.process = require('process')
global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production'

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:',
}

// Don't do this in production. You're going to want to patch in
// https://github.com/mvayngrib/react-native-randombytes or similar.
global.crypto = {
  getRandomValues(byteArray) {
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = Math.floor(256 * Math.random())
    }
  },
}
```

4. Write code as if you were using node. The `crypto_example.js` below provides an example that uses node's [stream](https://nodejs.org/api/stream.html) and [crypto](https://nodejs.org/api/crypto.html) modules. You can convince yourself that it works in standalone node.js by running `node node.js`. But thanks to the machinery implemented in the previous steps, it'll also work just fine (if a bit slowly) in React Native. Keep in mind, it's just an example...

```javascript
'use strict'

const assert = require('assert')
const crypto = require('crypto')
const stream = require('stream')

module.exports = function example() {
  const alice = crypto.createDiffieHellman(256)
  const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator())

  const alice_key = alice.generateKeys()
  const bob_key = bob.generateKeys()

  const alice_secret = alice.computeSecret(bob.getPublicKey())
  const bob_secret = bob.computeSecret(alice.getPublicKey())
  assert.equal(alice_secret.toString('hex'), bob_secret.toString('hex'))

  const cipher = crypto.createCipher('aes-256-ecb', alice_secret)
  const decipher = crypto.createDecipher('aes-256-ecb', bob_secret)

  const inputData = 'How much wood would a woodchuck chuck, if a woodchuck could chuck wood?'
  const input = new stream.Readable({
    read: function read() {
      this.push(new Buffer(inputData, 'utf-8'))
      this.push(null)
    }
  })

  let outputData = ''
  const output = new stream.Writable({
    write: function write(chunk, encoding, callback) {
      outputData += chunk.toString('utf-8')
      callback()
    }
  })

  input.pipe(cipher).pipe(decipher).pipe(output)

  return new Promise((resolve) => {
    output.on('finish', function () {
      resolve(outputData === inputData)
    })
  })
}
```

## Gotchas

The React Native packager is extremely sensitive to the following scenarios:

- Missing files. While webpack, for instance, will happily soldier on if a `require()`ed file is missing, the React Native packager will abort during dependency resolution. This has tried to be addressed with a couple of configuration options in [babel-plugin-rewrite-require](https://www.npmjs.com/package/babel-plugin-rewrite-require), but YMMV.

- Symlinks. The the React Native packager resolves symlinks differently when running the *server* development compared to running the *bundler* in release mode. Rather than relying on symlinks, I'd recommend adding additional directories to the packager's search path via `getProjectRoots` in `rn-cli.config.js`. Ideally, all your packages are to be found in one big directory tree anyway, whose root might as well be the packager's project root.

- Duplicate modules. Don't let the React Native packager discover multiple installations of React Native, for instance. Node has a fairly logical module resolution pattern, the React Native packager is more of a breadth-first algorithm. Also, node.js cares about the directory name under `node_modules` whereas the React Native packager cares about what `package.json` says. Best to ensure those always match.

- `package.json` aliases. The React Native packager will resolve `browser` or `react-native` aliases specified in a package's `package.json` only within that immediate package, while other tools such as webpack will honor those aliases regardless of context.

## Contributing to this Project

Anyone and everyone is welcome to contribute. Please take a moment to review the [guidelines for contributing](CONTRIBUTING.md). Add unit tests for any new or changed functionality. Lint and test your code using [ESLint][eslint-www].

- [Bug reports](CONTRIBUTING.md#bugs)
- [Feature requests](CONTRIBUTING.md#features)
- [Pull requests](CONTRIBUTING.md#pull-requests)

### Reporting Issues

Before opening any issue, please search for existing issues and read the [contributing guidelines](CONTRIBUTING.md). After that if you find a bug or would like to make feature request, [please open a new issue][issues].

## Development

## Release History

See the [release notes](CHANGELOG.md)

## [License](LICENSE.md)

[eslint-www]: http://www.eslint.org
[npm-url]: https://npm.iherb.net/package/@iherb/ui-tools-cli
[npm-image]: https://shields.iherb.net/npm/v/@iherb/ui-tools-cli.svg
