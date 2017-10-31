import request from "superagent";

export const GetAnonymousShoppingCartService = (anonymousToken, checkoutApiUrl, header = {}) => 
    (countryCode, zipcode) => 
        new Promise((resolve, reject) => request
            .get(`${checkoutApiUrl}/ec/gasc?countryCode=${countryCode}`)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=JP;cc=USD")
            .end((error, response) => error 
                ? reject({error}) 
                : resolve({data: response.body})))
