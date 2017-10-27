'use strict';

const path = require('path')
const fs = require('fs')
const url = require('url')

export function checkRequiredFiles(files) {
  let currentFilePath
  try {
    files.forEach(filePath => {
      currentFilePath = filePath
      fs.accessSync(filePath, fs.F_OK)
    })
    return true
  } catch (err) {
    return false
  }
}

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
export function resolveApp (relativePath) {
  return path.resolve(appDirectory, relativePath)
}

const envPublicUrl = process.env.PUBLIC_URL

export function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/')
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1)
  } else if (!hasSlash && needsSlash) {
    return `${path}/`
  } else {
    return path
  }
}

export function calcPublicUrl(appPackageJson, url) {
  return url || envPublicUrl || require(appPackageJson).homepage
}

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
export function calcServedPath(appPackageJson) {
  const publicUrl = calcPublicUrl(appPackageJson)
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/')
  return ensureSlash(servedUrl, true)
}

export function resolveOwn(relativePath) {
  return path.resolve(__dirname, '../..', relativePath)
}

const ownPackageJson = require('../../package.json')
const reactScriptsPath = resolveApp(`node_modules/${ownPackageJson.name}`)
export const reactScriptsLinked =
  fs.existsSync(reactScriptsPath) &&
  fs.lstatSync(reactScriptsPath).isSymbolicLink()

export function getDotEnv(file) {
  file || (file = '.env')
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(`template/${file}`)
  }

  return resolveApp(file)
}

export function getAppPath(file) {
  file || (file = '.')

  return resolveApp(file)
}

export function getAppBuild(file) {
  file || (file = 'dist')
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(`../../${file}`)
  }

  return resolveApp(file)
}

export function getAppPublic(file) {
  file || (file = 'dist')
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(`template/${file}`)
  }

  return resolveApp(file)
}

export function getAppHtml(file) {
  file || (file = 'dist/index.html')
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(`template/${file}`)
  }

  return resolveApp(file)
}

export function getAppIndex(file) {
  file || (file = 'src/index.js')
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(`template/${file}`)
  }

  return resolveApp(file)
}

export function getAppPackageJson() {
  let file = 'package.json'
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(file)
  }

  return resolveApp(file)
}

export function getAppSrc(file) {
  file || (file = 'src')
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(`template/${file}`)
  }

  return resolveApp(file)
}

export function getAppNodeModules() {
  let file = 'node_modules'
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return resolveOwn(file)
  }

  return resolveApp(file)
}

export function getPublicUrl(url) {
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return calcPublicUrl(resolveOwn('package.json'), url)
  }

  return calcPublicUrl(resolveApp('package.json'), url)
}

export function getServedPath() {
  // config before publish: we're in ./packages/tools/cli/config/
  if (
    !reactScriptsLinked &&
      __dirname.indexOf(path.join('packages', 'tools', 'cli', 'config')) !== -1
  ) {
    return calcServedPath(resolveOwn('package.json'))
  }

  return calcServedPath(resolveApp('package.json'))
}
