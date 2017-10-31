import request from "superagent"

export const ApplyCouponCodeService = (loginToken, checkoutApiUrl, header = {}) =>
    (couponCode) =>
        new Promise((resolve, reject) => request
            .post(`${checkoutApiUrl}/ec/pac?couponCode=${couponCode}`)
            .set("LoginToken", loginToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .end((error, response) => error
                ? reject({error})
                : resolve({data: response.body})))
