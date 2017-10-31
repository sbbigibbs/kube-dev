import request from "superagent"

export const GetShippingMethodsService = (loginToken, checkoutApiUrl, header = {}) =>
    (zipcode, countryCode) => 
        new Promise((resolve, reject) => {
            request
                .get(`${checkoutApiUrl}/ec/gsm?cc=${countryCode}&z=${zipcode}`)
                .set("LoginToken", loginToken)
                .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
                .end((error, response) => error 
                    ? reject({error}) 
                    : resolve({data: response.body}))
        })
