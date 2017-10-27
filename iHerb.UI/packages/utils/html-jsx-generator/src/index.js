import {createAST} from "@iherb/ui-util-html-parser"
import {createJSX} from "@iherb/ui-util-jsx-generator"

export const convertToJSX = html => {
    const root = `<root>${html}</root>`
    return createJSX(createAST(root))
}