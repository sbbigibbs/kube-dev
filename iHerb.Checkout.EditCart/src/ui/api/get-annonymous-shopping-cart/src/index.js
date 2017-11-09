import 'whatwg-fetch'

export const GetAnonUserCart = (anonymousToken, checkoutApiUrl, header = {}) =>
  (zipCode, countryCode) =>
      new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/gasc`, {
        method: 'GET',
        headers: {
          'AnonymousToken': anonymousToken,
          'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
        }
      }).then(response => response.json())
        .then(json => resolve({data: json}))
        .catch(error => reject({error})
      ))
