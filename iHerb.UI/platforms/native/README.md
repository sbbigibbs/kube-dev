# Native With Native Navigation

 [![NPM version][npm-image]][npm-url]

> React Native App.

This is the official, stable version of _Native With Native Navigation_.

## Getting Started

Options for adding _Native With Native Navigation_ to your project:

- Associate the `@iherb` scope using: `npm config set @iherb:registry https://registry.iherb.net`
- Install with [npm](https://npmjs.org/): `npm install @iherb/native-with-native-navigation`

## Usage

### Setup Project

```bash
yarn
yarn run haul start -- --platform android

```
### Change Systrace.js in React Native

Go to /node_modules/react-native/Libraries/Performance/Systrace.js

On line 263, comment out this line

   (require: any).Systrace = Systrace;

### Change build.gradle in Native Navigation

Go to /node_modules/native-navigation/lib/android/build.gradle

Turn this

  provided 'com.facebook.react:react-native:+'

Into this

  compile 'com.facebook.react:react-native:+'

### Change NativeNavigationPackage.java in Native Navigation

Go to `/node_modules/native-navigation/lib/android/src/main/java/com/airbnb/android/react/navigation/NativeNavigationPackage.java`


Turn this

```java
@Override public List<Class<? extends JavaScriptModule>> createJSModules() {
    return Collections.emptyList();
}
```

Into this

```java
public List<Class<? extends JavaScriptModule>> createJSModules() {
  return Collections.emptyList();
}
```

## More Information

For general information on configuration options or usage visit [Native With Native Navigation]().

Here are other resources for using _Native With Native Navigation_:

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
[npm-url]: https://npm.iherb.net/package/@iherb/native-with-native-navigation
[npm-image]: https://shields.iherb.net/npm/v/@iherb/native-with-native-navigation.svg
