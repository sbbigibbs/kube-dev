import { updateShippingMethod } from "./index"

describe("updateShippingMethod", () => {
    it("console log", (done) => {
        updateShippingMethod(67).then(data => {
            console.log(JSON.stringify(data, null, 4));
            done()
        })
    })
})