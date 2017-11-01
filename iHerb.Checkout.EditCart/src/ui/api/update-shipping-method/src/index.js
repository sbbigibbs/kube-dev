import request from "superagent"

export const UpdateShippingMethodService = (anonymousToken, checkoutApiUrl, header = {}) =>
    (shippingId) =>
        new Promise((resolve, reject) => request
            .put(`${checkoutApiUrl}/ec/usm?servID=${shippingId}`)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .end((error, response) => error
                ? reject({error})
                : resolve({data: response.body})))
