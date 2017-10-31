import request from "superagent"

export const UpdateShippingMethodService = (loginToken, checkoutApiUrl, header = {}) =>
    (shippingId) =>
        new Promise((resolve, reject) => request
            .put(`${checkoutApiUrl}/ec/usm?servID=${shippingId}`)
            .set("LoginToken", loginToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .end((error, response) => error
                ? reject({error})
                : resolve({data: response.body})))
