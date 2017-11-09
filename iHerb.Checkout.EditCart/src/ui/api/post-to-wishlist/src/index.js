import 'whatwg-fetch'

export const PostToWishListService = (loginToken, myAccountApiUrl, header = {}) =>
    (prodId) =>
        new Promise((resolve, reject) => fetch(`${myAccountApiUrl}/pr/pwl`, {
          method: 'POST',
          headers: {
            'LoginToken': loginToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          },
          body: {
            pid: prodId,
            quantity: 1
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))
