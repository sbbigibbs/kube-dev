import 'whatwg-fetch'

export const DeleteProductService = (anonymousToken, checkoutApiUrl, header = {}, productId) =>
  () =>
    new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/dpcrc/?pid=${productId.productId}`, {
      method: 'DELETE',
      headers: {
        'anonymousToken': anonymousToken,
        'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
      }
    }).then(response => response.json())
      .then(json => resolve({data: json}))
      .catch(error => reject({error})
    ))