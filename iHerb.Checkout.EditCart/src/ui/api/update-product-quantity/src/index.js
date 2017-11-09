import 'whatwg-fetch'

export const UpdateProdQtyService = (anonymousToken, loginToken, checkoutApiUrl, header = {}, productId, prodQty) =>
    () =>
        new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/upq`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'LoginToken': loginToken,
            "AnonymousToken": anonymousToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          },
          body: JSON.stringify({
            pid: productId,
            qty: prodQty
          })
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))
