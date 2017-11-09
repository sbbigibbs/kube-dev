import 'whatwg-fetch'

export const GetShippingMethodsService = (anonymousToken, loginToken, checkoutApiUrl, header = {}, zipCode, countryCode) =>
    () =>
        new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/gsm?cc=${countryCode}&z=${zipcode}`, {
          method: 'GET',
          headers: {
            'LoginToken': loginToken,
            "AnonymousToken": anonymousToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))