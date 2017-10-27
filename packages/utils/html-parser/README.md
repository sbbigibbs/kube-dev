# HTML Parser

[![NPM version][npm-image]][npm-url]

> HTML Parser.

This is the official, stable version of _Ui Util Html Parser_.

## Getting Started

Options for adding _Ui Util Html Parser_ to your project:

- Associate the `@iherb` scope using: `npm config set @iherb:registry https://registry.iherb.net`
- Install with [npm](https://npmjs.org/): `npm install @iherb/ui-util-html-parser`

## Usage

## More Information

iHerb has hard coded html in their data base.

For example, this actually exists somewhere in the current database

```html
<font color=\"#FF6600\">
    <strong>Free shipping for orders over $20.00!</strong> 
</font> 
<br/>
<font color=\"#008000\">
    <strong>No Po Box or APO</strong>
</font>
```

Unfortunately, this causes problems for cross platform development because we use react native which does not render straight html.

To overcome this we will parse this html into an Abstract Syntax Tree (AST) so that a platform can implement their own rendering method. 

For example, this package should generate the following JSON object for the html example

```json
{
    "type": "root",
    "children": [
        {
            "type": "tag",
            "tagName": "font",
            "attributes": [
                {
                    "key": "color",
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
            "children": []
        },
        {
            "type": "tag",
            "tagName": "font",
            "attributes": [
                {
                    "key": "color",
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

We expect each platform to make their own decisions on how to render this information.

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
[npm-url]: https://npm.iherb.net/package/@iherb/ui-util-html-parser
[npm-image]: https://shields.iherb.net/npm/v/@iherb/ui-util-html-parser.svg
