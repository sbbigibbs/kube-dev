const COOKIE_SESSION = 'ihr-session-id1'
const COOKIE_SESSION_CUSTOMER_ID = 'aid'

const COOKIE_PREFERENCES = 'iher-pref1'
const COOKIE_PREFERENCES_COUNTRY = 'sccode'
const COOKIE_PREFERENCES_CURRENCY = 'scurcode'
const COOKIE_PREFERENCES_LANGUAGE = 'lang'

const parseCookie = (cookie, delimiter = ';') => {
    var list = {};
  
    cookie && cookie.split(delimiter).forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = parseCookie(decodeURI(parts.join('=')), '&');
    });
  
    return list;
}

export const preferences = (cookie) => parseCookie(cookie)[COOKIE_PREFERENCES] || {}
export const language = (prefs) => prefs[COOKIE_PREFERENCES_LANGUAGE] || 'en-US'
export const currency = (prefs) => prefs[COOKIE_PREFERENCES_CURRENCY] || 'USD'
export const country = (prefs) => prefs[COOKIE_PREFERENCES_COUNTRY] || 'US'

export const session = (cookie) => parseCookie(cookie)[COOKIE_SESSION] || {}
export const customerId = (sess) => sess[COOKIE_SESSION_CUSTOMER_ID]