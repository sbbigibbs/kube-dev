import 'whatwg-fetch'

export const GetWishListService = (loginToken, myAccountApiUrl, header = {}, folderName = 'Home') =>
    () =>
        new Promise((resolve, reject) => fetch(`${myAccountApiUrl}/wl/gwl?fn=${folderName}`, {
          method: 'GET',
          headers: {
            'LoginToken': loginToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))
