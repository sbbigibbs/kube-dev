'use strict';

import {
  resolveApp,
  ensureSlash,
  calcPublicUrl,
  calcServedPath,
  resolveOwn,
  reactScriptsLinked,
} from './utils'

const path = require('path')
const fs = require('fs')
const url = require('url')

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndex: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: calcPublicUrl(resolveApp('package.json')),
  servedPath: calcServedPath(resolveApp('package.json')),
};

// config before eject: we're in ./node_modules/tools/cli/config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndex: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: calcPublicUrl(resolveApp('package.json')),
  servedPath: calcServedPath(resolveApp('package.json')),
  // These properties only exist before ejecting:
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'), // This is empty on npm 3
};

// config before publish: we're in ./packages/tools/cli/config/
if (
  !reactScriptsLinked &&
    __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
) {
  module.exports = {
    dotenv: resolveOwn('template/.env'),
    appPath: resolveApp('.'),
    appBuild: resolveOwn('../../dist'),
    appPublic: resolveOwn('template/public'),
    appHtml: resolveOwn('template/public/index.html'),
    appIndex: resolveOwn('template/src/index.js'),
    appPackageJson: resolveOwn('package.json'),
    appSrc: resolveOwn('template/src'),
    yarnLockFile: resolveOwn('template/yarn.lock'),
    testsSetup: resolveOwn('template/src/setupTests.js'),
    appNodeModules: resolveOwn('node_modules'),
    publicUrl: calcPublicUrl(resolveOwn('package.json')),
    servedPath: calcServedPath(resolveOwn('package.json')),
    // These properties only exist before ejecting:
    ownPath: resolveOwn('.'),
    ownNodeModules: resolveOwn('node_modules'),
  };
}
