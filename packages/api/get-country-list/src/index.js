import request from "superagent"

export const GetCountryListService = (anonymousToken, loginToken, myAccountApiUrl, header = {}) =>
    () =>
        new Promise((resolve, reject) => request
                .get(`${myAccountApiUrl}/cfg/gr`)
                .set("LoginToken", loginToken)
                .set("AnonymousToken", anonymousToken)
                .set("iH-Pref", header.ihPref || "lc=en-US;ctc=JP;cc=USD")
                .end((error, response) => error
                    ? reject({error})
                    : resolve({data: response.body})))
