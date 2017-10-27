# Html JSX Generator

 [![NPM version][npm-image]][npm-url]

> HTML JSX Generator.

We need to dynamically generate JSX based on HTML

## Getting Started

Options for adding _Ui Util Html Jsx Generator_ to your project:

- Associate the `@iherb` scope using: `npm config set @iherb:registry https://registry.iherb.net`
- Install with [npm](https://npmjs.org/): `npm install @iherb/ui-util-html-jsx-generator`

## Usage

## More Information


Consider the following HTML:

```html
<font color="#FF6600">
    <strong>Free shipping for orders over $20.00!</strong>
</font>
<br/>
<font color="#008000">
    <strong>No Po Box or APO</strong>
</font>
```

We would expect this module to generate the following JSX:

```xml
<View>
    <View style={{color: "#FF6600"}}>
        <Text>Free shipping for orders over $20.00! </Text>
    </View>
    <View style={{marginTop: 16}}></View>
    <View style={{color: "#008000"}}>
        <Text>No Po Box or APO</Text>
    </View>
<View>
```

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
[npm-url]: https://npm.iherb.net/package/@iherb/ui-util-html-jsx-generator
[npm-image]: https://shields.iherb.net/npm/v/@iherb/ui-util-html-jsx-generator.svg
