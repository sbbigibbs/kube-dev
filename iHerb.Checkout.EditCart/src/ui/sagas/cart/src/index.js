import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import {actions, actionTypes} from "@iherb/ui-redux-workflow-cart"
import {GetShoppingCartService} from "@iherb/ui-api-get-shopping-cart"
import {GetShippingMethodsService} from "@iherb/ui-api-get-shipping-methods"
import {UpdateProdQtyService} from "@iherb/ui-api-update-product-quantity"
import {UpdateShippingMethodService} from "@iherb/ui-api-update-shipping-method"
import {DeleteProductService} from "@iherb/ui-api-delete-product"
import {PostToWishListService} from "@iherb/ui-api-post-to-wishlist"
import {ApplyCouponCodeService} from "@iherb/ui-api-apply-coupon-code"
import {DeleteCouponService} from "@iherb/ui-api-delete-coupon"
import {GetCountryListService} from "@iherb/ui-api-get-country-list"

export function* loadPageSaga() {
    yield takeEvery(
        actionTypes.LOAD_PAGE,
        loadPageHandler)
}

export function* loadPageHandler(action) {
    try {
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }
        const {data} = yield call(GetShoppingCartService(
            loginToken,
            checkoutApi,
            header
        ))
       yield put(actions.loadShoppingCart(data))
       yield put(actions.loadCountryList())
    }
    catch(error) {
        yield put(actions.errorThrown(error))   
    }
}

export function* getShippingMethodsSaga() {
    yield takeEvery(
        actionTypes.GET_SHIPPING_METHODS,
        getShippingMethodsHandler)
}

export function* getShippingMethodsHandler(action) {
    try {
        const zipcode = action.payload.zipcode
        const countryCode = action.payload.countryCode

        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        const response = yield call(GetShippingMethodsService(
            loginToken,
            checkoutApi,
            header),
            zipcode,
            countryCode
        )
        yield put(actions.updateShippingMethods({
            shippingMethods: response.data.smList.shipMethodList,
            weight: response.data.smList.shipWeightLbs
        }))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* changeProductQuantitySaga() {
    yield takeEvery(
        actionTypes.CHANGE_PRODUCT_QUANTITY,
        changeProductQuantityHandler)
}

export function* changeProductQuantityHandler(action) {
    try {
        const {productId, quantity} = action.payload
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        const {data} = yield call(UpdateProdQtyService(
            loginToken,
            checkoutApi
        ), productId, quantity)

        const cartData = yield call(GetShoppingCartService(
            loginToken,
            checkoutApi,
            header
        ))
        yield put(actions.loadShoppingCart(cartData.data))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* updateShippingMethodSaga() {
    yield takeEvery(
        actionTypes.UPDATE_SELECTED_SHIPPING_METHOD,
        updateShippingMethodHandler)
}

export function* updateShippingMethodHandler(action) {
    try {
        const {shippingId} = action.payload
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        yield call(UpdateShippingMethodService(
            loginToken,
            checkoutApi
        ), shippingId)
        const {data} = yield call(GetShoppingCartService(
            loginToken,
            checkoutApi,
            header
        ))
        yield put(actions.loadShoppingCart(data))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* deleteProductSaga() {
    yield takeEvery(
        actionTypes.REMOVE_PRODUCT,
        deleteProductHandler
    )
}

export function* deleteProductHandler(action) {
    try {
        const {productId} = action.payload
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")

        const {data} = yield call(DeleteProductService(
            loginToken,
            checkoutApi
        ), productId)
        yield put(actions.loadShoppingCart(data))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* postToWishlistSaga() {
    yield takeEvery(
        actionTypes.POST_TO_WISHLIST,
        postToWishlistHandler
    )
}

export function* postToWishlistHandler(action) {
    try {
        const {productId} = action.payload
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const myAccountApi = config.get("myAccountApi")

        yield call(PostToWishListService(
            loginToken,
            myAccountApi
        ), productId.productId)
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* errorThrownSaga() {
    yield takeEvery(
        actionTypes.ERROR_THROWN,
        errorThrownHandler)
}

export function* errorThrownHandler(action) {
    console.log(action.payload.error)
}

export function* applyCouponCodeSaga() {
    yield takeEvery(
        actionTypes.APPLY_COUPONCODE,
        applyCouponCodeHandler
    )
}

export function* applyCouponCodeHandler(action) {
    try {
        const {couponCode} = action.payload
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        const couponData = yield call(ApplyCouponCodeService(
            loginToken,
            checkoutApi
        ), couponCode)

        if(couponData.data.errMsg)
            yield put(actions.getPromoError(couponData.data.errMsg))
        else
            yield put(actions.clearPromoError())
        
        const {data} = yield call(GetShoppingCartService(
            loginToken,
            checkoutApi,
            header
        ))
        yield put(actions.loadShoppingCart(data))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* deleteCouponCodeSaga() {
    yield takeEvery(
        actionTypes.DELETE_COUPONCODE,
        deleteCouponCodeHandler
    )
}

export function* deleteCouponCodeHandler(action) {
    try {
        const {couponCode} = action.payload
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        yield call(DeleteCouponService(
            loginToken,
            checkoutApi
        ), couponCode)

        const {data} = yield call(GetShoppingCartService(
            loginToken,
            checkoutApi,
            header
        ))
        yield put(actions.loadShoppingCart(data))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* getCountryListSaga() {
    yield takeEvery(
        actionTypes.LOAD_COUNTRY_LIST,
        getCountryListHandler
    )
}

export function* getCountryListHandler(action) {
    try {
        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const myAccountApi = config.get("myAccountApi")

        const {data} = yield call(GetCountryListService(
            loginToken,
            myAccountApi
        ))
        yield put(actions.putCountryList(data.locale.countryList))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}