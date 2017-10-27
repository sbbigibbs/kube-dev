import request from "superagent";

export const GetShoppingCartService = (anonymousToken, loginToken, checkoutApiUrl, header = {}) => 
    (zipcode, countryCode) => 
        new Promise((resolve, reject) => request
            .get(`${checkoutApiUrl}/ec/gsc`)
            .set("LoginToken", loginToken)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=JP;cc=USD")
            .end((error, response) => error 
                ? reject({error}) 
                : resolve({data: response.body})))
