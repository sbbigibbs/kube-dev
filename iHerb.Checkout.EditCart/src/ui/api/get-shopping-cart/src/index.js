import 'whatwg-fetch'

export const GetShoppingCartService = (anonymousToken, loginToken, checkoutApiUrl, header = {}) => 
    (zipcode, countryCode) => 
        new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/gsc`, {
          method: 'GET',
          headers: {
            'LoginToken': loginToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))