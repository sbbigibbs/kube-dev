import {getShoppingCart} from "./index"

describe("getShoppingCart", () => {
    it("console log", (done) => {
        getShoppingCart().then(data => {
            console.log(JSON.stringify(data, null, 4));
            done()
        })
    })
})