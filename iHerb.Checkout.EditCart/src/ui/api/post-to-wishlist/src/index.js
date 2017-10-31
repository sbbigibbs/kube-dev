import request from "superagent";

export const PostToWishListService = (loginToken, myAccountApiUrl, header = {}) =>
    (prodId) => {
        console.log('loginToken: ', loginToken)
        console.log('myaccount api url: ', myAccountApiUrl)
        console.log('prodId: ', prodId)
        new Promise((resolve, reject) => request
            .post(`${myAccountApiUrl}/pr/pwl`)
            .send({pid: prodId, quantity: 1})
            .set("LoginToken", loginToken)
            .end((error, response) => error
                ? reject({error})
                : resolve({data: response.body})))
    }
