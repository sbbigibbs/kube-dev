import syntaxRules from "./syntax-rules"

const peg = require("pegjs")
const parser = peg.generate(syntaxRules)

export const createAST = (html) => parser.parse(html)