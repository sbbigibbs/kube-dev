import request from "superagent"

export const GetRecommendationsService = (loginToken, recApiUrl, header = {}) => 
    (imgSize, prodString) => 
        new Promise((resolve, reject) => request
                .get(`${recApiUrl}/rcm/gcr?${header.ihPref}&imgSize=${imgSize}${prodString}`)
                .set("LoginToken", loginToken)
                .end((error, response) => error
                    ? reject({error})
                    : resolve({data: response.body})))
