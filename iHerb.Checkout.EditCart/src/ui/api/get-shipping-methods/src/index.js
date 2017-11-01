import request from "superagent"

export const GetShippingMethodsService = (anonymousToken, checkoutApiUrl, header = {}) =>
    (zipcode, countryCode) => 
        new Promise((resolve, reject) => {
            request
                .get(`${checkoutApiUrl}/ec/gsm?cc=${countryCode}&z=${zipcode}`)
                .set("AnonymousToken", anonymousToken)
                .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
                .end((error, response) => error 
                    ? reject({error}) 
                    : resolve({data: response.body}))
        })
