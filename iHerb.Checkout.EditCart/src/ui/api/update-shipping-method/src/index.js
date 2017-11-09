import 'whatwg-fetch'

export const UpdateShippingMethodService = (anonymousToken, loginToken, checkoutApiUrl, header = {}, shippingId) =>
    () =>
        new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/usm?servID=${shippingId}`, {
          method: 'PUT',
          headers: {
            'LoginToken': loginToken,
            "AnonymousToken": anonymousToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))
