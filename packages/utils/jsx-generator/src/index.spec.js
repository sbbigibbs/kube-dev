import {createJSX} from "./index"
import {expect} from "chai"
const ReactTestRenderer = require('react-test-renderer');
const ReactShallowRenderer = require('react-test-renderer/shallow');

describe("Generate JSX", () => {
    it("empty div", () => {
        const testCase = require("./test-cases/empty-div")

        const jsx = createJSX(testCase.ast)
        const actualJSX = ReactTestRenderer.create(jsx).toJSON()
        const expectedJSX = ReactTestRenderer.create(testCase.jsx).toJSON()

        expect(actualJSX).to.deep.equal(expectedJSX)
    })

    it("free shipping over 20 dollars", () => {
        const testCase = require("./test-cases/free-shipping-over-20-dollars-span")

        const jsx = createJSX(testCase.ast)
        const actualJSX = ReactTestRenderer.create(jsx).toJSON()
        const expectedJSX = ReactTestRenderer.create(testCase.jsx).toJSON()

        expect(actualJSX).to.deep.equal(expectedJSX)
    })
})