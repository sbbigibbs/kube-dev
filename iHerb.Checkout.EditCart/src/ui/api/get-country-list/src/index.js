import request from "superagent"

export const GetCountryListService = (loginToken, myAccountApiUrl, header = {}) =>
    () =>
    new Promise((resolve, reject) => {
        request
            .get(`${myAccountApiUrl}/cfg/gr`)
            .set("LoginToken", loginToken)
            .set("iH-Pref", header.ihPref)
            .end((error, response) => error
                ? reject({error})
                : resolve({data: response.body}))
    })
