import request from "superagent"

export const ApplyCouponCodeService = (anonymousToken, checkoutApiUrl, header = {}) =>
    (couponCode) =>
        new Promise((resolve, reject) => request
            .post(`${checkoutApiUrl}/ec/pac?couponCode=${couponCode}`)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .end((error, response) => error
                ? reject({error})
                : resolve({data: response.body})))
