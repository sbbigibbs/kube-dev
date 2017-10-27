import request from "superagent"

export const DeleteAllProductsService = (anonymousToken, loginToken, checkoutApiUrl, header = {}) =>
    () =>
        new Promise((resolve, reject) => request
            .delete(`${checkoutApiUrl}/ec/dap`)
            .set("LoginToken", loginToken)
            .set("AnonymousToken", anonymousToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=KR;cc=USD")
            .end((error, response) => error
                ? reject({error}) 
                : resolve({data: response.body})))