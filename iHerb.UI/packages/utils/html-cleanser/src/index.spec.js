import {expect} from "chai"
import {cleanse} from "./index"
import {html, expected} from "./tests/chinese-shipping-popup"

describe("html-cleanser", () => {
    it("cleanses html comments", () => {
        const str = "<span><!-- asdf --></span>"
        expect(cleanse(str)).to.equal("<span></span>")
    })

    it("cleanses \\n", () => {
        const str = "<span>\n</span>"
        expect(cleanse(str)).to.equal("<span></span>")

    })

    it('cleanses \"', () => {
        const str = '<span attr=\"value\"></span>'
        expect(cleanse(str)).to.equal('<span attr="value"></span>')
    })

    it('cleanses chinese html', () => {
        expect(cleanse(html)).to.equal(expected)

    })
})