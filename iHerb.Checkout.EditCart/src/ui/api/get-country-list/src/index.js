import 'whatwg-fetch'

export const GetCountryListService = (anonymousToken, loginToken, myAccountApiUrl, header = {}) =>
    () =>
        new Promise((resolve, reject) => fetch(`${myAccountApiUrl}/cfg/gr`, {
          method: 'GET',
          headers: {
            'LoginToken': loginToken,
            'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
          }
        }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))
