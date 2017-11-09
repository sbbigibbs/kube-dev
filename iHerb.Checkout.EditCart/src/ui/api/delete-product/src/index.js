import 'whatwg-fetch'

export const DeleteProductService = (anonymousToken, loginToken, checkoutApiUrl, header = {}, productId) =>
  () =>
    new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/dpcrc/?pid=${productId.productId}`, {
      method: 'DELETE',
      headers: {
        'LoginToken': loginToken,
        'anonymousToken': anonymousToken,
        'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
      }
    }).then(response => response.json())
      .then(json => resolve({data: json}))
      .catch(error => reject({error})
    ))