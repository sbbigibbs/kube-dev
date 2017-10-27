# JSX Generator

[![NPM version][npm-image]][npm-url]

> JSX Generator.

This is the official, stable version of _Ui Util Jsx Generator_.

## Getting Started

Options for adding _Ui Util Jsx Generator_ to your project:

- Associate the `@iherb` scope using: `npm config set @iherb:registry https://registry.iherb.net`
- Install with [npm](https://npmjs.org/): `npm install @iherb/ui-util-jsx-generator`

## Usage

## More Information

We need to dynamically generate JSX based on an Abstract Syntax Tree (AST). 

Consider the following AST:

```json
{
    "type": "root",
    "children": [
        {
            "type": "tag",
            "tagName": "font",
            "attributes": [
                {
                    "type": "color",
                    "value": "#FF6600"
                }
            ],
            "children": [
                {
                    "type": "tag",
                    "tagName": "strong",
                    "children": [
                        {
                            "type": "text",
                            "value": "Free shipping for orders over $20.00!"
                        }
                    ]
                }
            ]
        },
        {
            "type": "tag",
            "tagName": "br",
            "attributes": [],
            "children": [],
        },
        {
            "type": "tag",
            "tagName": "font",
            "attributes": [
                {
                    "type": "color",
                    "value": "#008000" 
                }
            ],
            "children": [
                {
                    "type": "tag",
                    "tagName": "strong",
                    "children": [
                        {
                            "type": "text",
                            "value": "No Po Box or APO"
                        }
                    ]
                }
            ]
        }
    ]
}
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
[npm-url]: https://npm.iherb.net/package/@iherb/ui-util-jsx-generator
[npm-image]: https://shields.iherb.net/npm/v/@iherb/ui-util-jsx-generator.svg
