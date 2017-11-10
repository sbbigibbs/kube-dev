import 'whatwg-fetch'

export const GetCountryListService = (anonymousToken,
  loginToken,
  myAccountApiUrl,
  country,
  currency,
  language,
  header = {}) =>
    () =>
        new Promise((resolve, reject) => fetch(
          `${myAccountApiUrl}/cfg/gr?countryCode=${country}&currencyCode=${currency}&languageCode=${language}`,
            {
              method: 'GET',
              headers: {
                'IH-Pref': header.ihPref || "lc=en-US;ctc=JP;cc=USD"
              }
            }).then(response => response.json())
          .then(json => resolve({data: json}))
          .catch(error => reject({error})
        ))
