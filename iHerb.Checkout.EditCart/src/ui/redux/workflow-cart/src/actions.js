import * as actionType from "./action-types"

export const loadPage = (payload) => ({
    type: actionType.LOAD_PAGE,
    payload
})

export const loadShoppingCart = (data) => ({
    type: actionType.LOAD_SHOPPING_CART,
    payload: {
        data
    }
})

export const incrementCartItemQuantity = id => ({
    type: actionType.INCREMENT_CART_ITEM_QUANTITY,
    payload: {
        id
    }
})

export const decrementCartItemQuantity = id => ({
    type: actionType.DECREMENT_CART_ITEM_QUANTITY,
    payload: {
        id
    }
})

export const changeProductQuantity = ({productId, quantity}) => ({
    type: actionType.CHANGE_PRODUCT_QUANTITY,
    payload: {
        productId,
        quantity
    }
})

export const changeShippingMethod = id => ({
    type: actionType.CHANGE_SHIPPING_METHOD,
    payload: {
        id
    }
})

export const changeZipCode = zipcode => ({
    type: actionType.CHANGE_ZIPCODE,
    payload: {
        zipcode
    }
})

export const getShippingMethods = (zipcode, countryCode) => ({
    type: actionType.GET_SHIPPING_METHODS,
    payload: {
        zipcode,
        countryCode
    }
})

export const updateShippingMethods = ({shippingMethods, weight}) => ({
    type: actionType.UPDATE_SHIPPING_METHODS,
    payload: {
        shippingMethods,
        weight
    }
})

export const updateShoppingCart = cart => ({
    type: actionType.UPDATE_SHOPPING_CART,
    payload: {
        cart
    }
})

export const changeDestination = () => ({
    type: actionType.CHANGE_DESTINATION
})

export const requestProductQuantityChange = ({productId}) => ({
    type: actionType.REQUEST_PRODUCT_QUANTITY_CHANGE,
    payload: {
        productId
    }
})

export const updateSelectedShippingMethod = shippingId => ({
    type: actionType.UPDATE_SELECTED_SHIPPING_METHOD,
    payload: {
        shippingId
    }
})

export const deleteProductFromCart = (productId) => ({
    type: actionType.REMOVE_PRODUCT,
    payload: {
        productId
    }
})

export const deleteAllProductsFromCart = () =>({
    type: actionType.REMOVE_ALL_PRODUCTS
});

export const postWishList = (productId) => ({
    type: actionType.POST_TO_WISHLIST,
    payload: {
        productId
    }
})

export const errorThrown = ({error}) => ({
    type: actionType.ERROR_THROWN,
    payload: {
        error
    }
})

export const changeCouponCode = couponCode => ({
    type: actionType.CHANGE_COUPONCODE,
    payload: {
        couponCode
    }
})

export const applyCouponCode = (couponCode) => ({
    type: actionType.APPLY_COUPONCODE,
    payload: {
        couponCode,
    }
})

export const deleteCouponCode = (couponCode) => ({
    type: actionType.DELETE_COUPONCODE,
    payload: {
        couponCode
    }
})

export const loadCountryList = () => ({
    type: actionType.LOAD_COUNTRY_LIST
})

export const putCountryList = countryList => ({
    type: actionType.PUT_COUNTRY_LIST,
    payload: {
        countryList
    }
})

export const updateShippingCountry = (country, requiresZip, countryCode) => ({
    type: actionType.UPDATE_SHIPPING_COUNTRY,
    payload: {
        country,
        requiresZip,
        countryCode
    }
})

export const getPromoError = errorMsg => ({
    type: actionType.GET_PROMO_ERRORS,
    payload: {
        errorMsg
    }
    
})

export const clearPromoError = () => ({
    type: actionType.CLEAR_PROMO_ERRORS
})

export const getRecommendations = () => ({
    type: actionType.GET_RECOMMENDATIONS
})

export const loadRecommendations = (prodList) => ({
    type: actionType.LOAD_RECOMMENDATIONS,
    payload: {
        prodList
    }
})

export const getWishlist = (folderName = 'Home') => ({
  type: actionType.GET_WISHLIST,
  payload: {
    folderName
  }
})

export const displayWishlist = () => ({
  type: actionType.DISPLAY_WISHLIST
})

export const loadWishlist = (wishListData) => ({
  type: actionType.LOAD_WISHLIST,
  payload: {
    wishListData
  }
})

export const displayWishlistSelection = () => ({
  type: actionType.DISPLAY_WISHLIST_SELECTION
})

export const selectWishlist = (folderName) => ({
  type: actionType.SELECT_WISHLIST,
  payload: {
    folderName
  }
})

export const toggleShipping = () => ({
  type: actionType.TOGGLE_SHIPPING
})

export const toggleTab = (tab) => ({
  type: actionType.TOGGLE_TAB,
  payload: {
    tab
  }
})

export const refreshShoppingCart = (ihPref) => ({
    type: actionType.REFRESH_SHOPPING_CART,
    payload: {
        ihPref
    }
})