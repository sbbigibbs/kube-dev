import { updateProdQty } from "./index"

describe("getShoppingCart", () => {
    it("console log", (done) => {
        updateProdQty("59098", "4").then(data => {
            console.log(JSON.stringify(data, null, 4));
            done()
        })
    })
})