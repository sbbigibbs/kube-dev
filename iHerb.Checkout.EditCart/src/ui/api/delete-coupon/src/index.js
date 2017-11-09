import 'whatwg-fetch'

export const DeleteCouponService = (anonymousToken, loginToken, checkoutApiUrl, header = {}, couponCode) =>
    () =>
        new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/dc?couponCode=${couponCode}`, {
          method: 'DELETE',
          headers: {
            'LoginToken': loginToken,
            "AnonymousToken": anonymousToken,
            'IH-Pref': header.ihPref || "ln=en-US;ctc=KR;cc=USD"
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))