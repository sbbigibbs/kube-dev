import request from "superagent"

export const DeleteCouponService = (anonymousToken, loginToken, checkoutApiUrl, header = {}) =>
    (couponCode) =>
        new Promise((resolve, reject) => request
            .delete(`${checkoutApiUrl}/ec/dc?couponCode=${couponCode}`)
            .set("LoginToken", loginToken)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .end((error, response) => error 
                ? reject({error}) 
                : resolve({data: response.body})))
                