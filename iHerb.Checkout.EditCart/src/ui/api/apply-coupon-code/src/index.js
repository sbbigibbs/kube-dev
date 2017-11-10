import 'whatwg-fetch'

export const ApplyCouponCodeService = (anonymousToken, checkoutApiUrl, header = {}, couponCode) =>
    () =>
        new Promise((resolve, reject) => fetch(`${checkoutApiUrl}/ec/pac?couponCode=${couponCode}`, {
          method: 'POST',
          headers: {
            "AnonymousToken": anonymousToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))
