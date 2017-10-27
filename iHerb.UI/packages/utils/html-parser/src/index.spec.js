import {createAST} from  "./index"
import {expect} from "chai"

describe("Generate AST", () => {
    it("empty div", () => {
        const testCase = require("./test-cases/empty-div")
        const ast = createAST(testCase.html)
        expect(ast).to.deep.equal(testCase.ast)
    })

    it("empty font tag", () => {
        const testCase = require("./test-cases/empty-font-tag")
        const ast = createAST(testCase.html)
        expect(ast).to.deep.equal(testCase.ast)
    })
    
    it("font tag with text", () => {
        const testCase = require("./test-cases/font-tag-with-text")
        const ast = createAST(testCase.html)
        expect(ast).to.deep.equal(testCase.ast)
    })

    it("free shipping over $20 (font)", () => {
        const testCase = require("./test-cases/free-shipping-over-20-dollars-font")
        const ast = createAST(testCase.html)
        expect(ast).to.deep.equal(testCase.ast)
    })

    it("free shipping over $20 (span)", () => {
        const testCase = require("./test-cases/free-shipping-over-20-dollars-span")
        const ast = createAST(testCase.html)
        expect(ast).to.deep.equal(testCase.ast)
    })

    it("chinese", () => {
        const testCase = require("./test-cases/chinese")
        const ast = createAST(testCase.html)
        expect(ast).to.deep.equal(testCase.ast)
    })

    it("chinese shipping description", () => {
        const testCase = require("./test-cases/shipping-descriptions/chinese-shipping-description")
        const ast = createAST(testCase.html)
        expect(ast).to.deep.equal(testCase.ast)
    })
})