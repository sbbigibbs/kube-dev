import request from "superagent"

export const DeleteProductService = (anonymousToken, checkoutApiUrl, header = {}) =>
    (productId) =>
        new Promise((resolve, reject) => request
            .delete(`${checkoutApiUrl}/ec/dpcrc/?pid=${productId.productId}`)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .end((error, response) => error
                ? reject({error}) 
                : resolve({data: response.body})))
