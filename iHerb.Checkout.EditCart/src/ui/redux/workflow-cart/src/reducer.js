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
        [actionTypes.CLEAR_PROMO_ERRORS]: handleClearPromoError
    }

    const callback = callbacks[action.type]

    return callback ? callback(state, action) : state
}

function handleChangeZipcode(state, action) {
    const {zipcode} = action.payload

    return state
        .set("zipcode", zipcode)
}

function handleLoadShoppingCart(state, action) {
    const {cart} = action.payload.data
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

//return state.updateIn(["cart", "appliedCouponsLst"], list => list.push(couponCode)