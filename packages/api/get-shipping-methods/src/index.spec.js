import {getShippingMethods} from "./index"

describe("getShippingMethods", () => {
    it("console log", (done) => {
        getShippingMethods("92620", "US").then(data => {
            console.log(JSON.stringify(data, null, 4));
            done()
        })
    })
})