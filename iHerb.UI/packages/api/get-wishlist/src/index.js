import request from "superagent";

export const GetWishListService = (loginToken, myAccountApiUrl, header = {}) => 
    (folderName = 'Home') => 
        new Promise((resolve, reject) => request
            .get(`${myAccountApiUrl}/wl/gwl?fn=${folderName}`)
            .set("LoginToken", loginToken)
            .set("iH-Pref", header.ihPref || "lc=en-US;ctc=JP;cc=USD")
            .end((error, response) => error 
                ? reject({error}) 
                : resolve({data: response.body})))
