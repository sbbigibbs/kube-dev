import {convertToJSX} from "./index"
import {expect} from "chai"
const ReactTestRenderer = require('react-test-renderer');
const ReactShallowRenderer = require('react-test-renderer/shallow');

describe("Generate JSX", () => {

    it("free shipping over 20 dollars", () => {
        const testCase = require("./test-cases/free-shipping-over-20-dollars-span")

        const jsx = convertToJSX(testCase.html)
        const actualJSX = ReactTestRenderer.create(jsx).toJSON()
        const expectedJSX = ReactTestRenderer.create(testCase.jsx).toJSON()

        expect(actualJSX).to.deep.equal(expectedJSX)
    })

    it("chinese shipping descriptions", () => {
        const testCase = require("./test-cases/shipping-descriptions/chinese-shipping-description")
        
        const jsx = convertToJSX(testCase.html)
        const actualJSX = ReactTestRenderer.create(jsx).toJSON()
        const expectedJSX = ReactTestRenderer.create(testCase.jsx).toJSON()

        expect(actualJSX).to.deep.equal(expectedJSX)
    })
})