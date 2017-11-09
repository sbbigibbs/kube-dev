import initialState from "./initial-state"
import * as actionTypes from "./action-types"
import {fromJS} from "immutable"

export default (state = initialState, action = {}) => {
    const callbacks = {
        [actionTypes.LOAD_SHOPPING_CART]: handleLoadShoppingCart,
        [actionTypes.CHANGE_ZIPCODE]: handleChangeZipcode,
        [actionTypes.UPDATE_SHOPPING_CART]: handleUpdateShoppingCart,
        [actionTypes.CHANGE_COUPONCODE]: handleChangeCouponCode,
        [actionTypes.PUT_COUNTRY_LIST]: handlePutCountryList,
        [actionTypes.UPDATE_SHIPPING_COUNTRY]: handleUpdateShippingCountry,
        [actionTypes.GET_PROMO_ERRORS]: handlePromoError,
        [actionTypes.CLEAR_PROMO_ERRORS]: handleClearPromoError,
        [actionTypes.LOAD_RECOMMENDATIONS]: handleLoadCountryList,
        [actionTypes.TOGGLE_SHIPPING]: handleToggleShipping,
        [actionTypes.TOGGLE_TAB]: handleToggleTab
    }

    const callback = callbacks[action.type]

    return callback ? callback(state, action) : state
}

function handleClearApp(state, action) {
    return initialState
}

function handleChangeZipcode(state, action) {
    const {zipcode} = action.payload

    return state
        .set("zipcode", zipcode)
}

function handleLoadShoppingCart(state, action) {
    const {cart} = action.payload.data
    //map over cart product ids and set it in state
    return state
        .set("cart", fromJS(cart))
        .set("country", cart.countryDisplayName)
}

function handleUpdateShoppingCart(state, action) {
    const {cart} = action.payload

    return state
        .set("cart", fromJS(cart))
}

function handleChangeCouponCode(state, action) {
    const {couponCode} = action.payload
    
    return state
        .set("couponCode", couponCode)
}

function handlePromoError(state, action) {
    const {errorMsg} = action.payload
    
    return state
        .set("promoCodeError", errorMsg)
}

function handleClearPromoError(state, action) {
    
    return state
        .set("promoCodeError", "")
}

function handlePutCountryList(state, action) {
    const countryList = action.payload
    
    return state
        .set("countryList", countryList.countryList)
}

function handleUpdateShippingCountry(state, action) {
    const selectedCountry = action.payload
    return state
        .set("country", selectedCountry.country)
        .set("requiresZip", selectedCountry.requiresZip)
        .set("countryCode", selectedCountry.countryCode)
}

function handleLoadCountryList(state, action) {
    const prodList = action.payload
    return state
        .set("recommendationList", prodList)
}

function handleToggleShipping(state, action) {
  return state
    .set("showShipping", !state.get("showShipping"))
}

function handleToggleTab(state, action) {
  const tabName = action.payload
  return state
    .set('selectedTab', tabName.tab)
}