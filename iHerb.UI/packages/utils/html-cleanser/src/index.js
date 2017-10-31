const stripHtmlComments = require('strip-html-comments')

export const cleanse = (str) => {
    return stripHtmlComments(str)
        .replace(new RegExp('\n', "g"), "")
        .replace(new RegExp('\\"', "g"), '"')
}