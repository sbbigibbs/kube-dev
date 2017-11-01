import request from "superagent"

export const UpdateProdQtyService = (anonymousToken, checkoutApiUrl, header = {}) =>
    (productId, prodQty) =>
    new Promise((resolve, reject) => request
            .put(`${checkoutApiUrl}/ec/upq`)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .send({ pid: productId, qty: prodQty })
            .end((error, response) => error
                ? reject({error})
                : resolve({data: response.body})))
