import { all, call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import {actions, actionTypes} from "@iherb/ui-redux-workflow-cart"
import {GetShoppingCartService} from "@iherb/ui-api-get-shopping-cart"
import {GetAnonUserCart} from "@iherb/ui-api-get-annonymous-shopping-cart"
import {GetShippingMethodsService} from "@iherb/ui-api-get-shipping-methods"
import {UpdateProdQtyService} from "@iherb/ui-api-update-product-quantity"
import {UpdateShippingMethodService} from "@iherb/ui-api-update-shipping-method"
import {DeleteProductService} from "@iherb/ui-api-delete-product"
import {PostToWishListService} from "@iherb/ui-api-post-to-wishlist"
import {ApplyCouponCodeService} from "@iherb/ui-api-apply-coupon-code"
import {DeleteCouponService} from "@iherb/ui-api-delete-coupon"
import {GetCountryListService} from "@iherb/ui-api-get-country-list"
import {GetRecommendationsService} from "@iherb/ui-api-get-recommendations"
import {DeleteAllProductsService} from "@iherb/ui-api-delete-all-products"
import {GetWishListService} from "@iherb/ui-api-get-wishlist"
import {toJS} from "immutable"

export function* loadPageSaga() {
    yield takeEvery(
        actionTypes.LOAD_PAGE,
        loadPageHandler)
}

export function* loadPageHandler(action) {
    try {
        const config = yield select( state => state.config )
        const anonymousToken = config.get("anonymousToken")
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
     
        const header = {
            ihPref: action.payload.ihPref != null ? action.payload.ihPref : "lc=en-US;ctc=JP;cc=USD"
        }        
           
        let { data } = loginToken != null ? 
        yield call(GetShoppingCartService(
            anonymousToken,
            loginToken,
            checkoutApi,
            header
        )) : 
        yield call(GetAnonUserCart(
            anonymousToken,            
            checkoutApi,
            header
        ))        

       yield put(actions.loadShoppingCart(data))
       yield put(actions.loadCountryList())
//       yield put(actions.getRecommendations())
       yield put(actions.getWishlist())
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
        const anonymousToken = config.get("anonymousToken")        
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }
        
        const response = yield call(GetShippingMethodsService(
            anonymousToken,
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
        const anonymousToken = config.get("anonymousToken")
        
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        const {data} = yield call(UpdateProdQtyService(
            anonymousToken,
            loginToken,
            checkoutApi
        ), productId, quantity)

        const cartData = loginToken != null ? 
        yield call(GetShoppingCartService(
            anonymousToken,
            loginToken,
            checkoutApi,
            header
        )) : 
        yield call(GetAnonUserCart(
            anonymousToken,            
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
        const anonymousToken = config.get("anonymousToken")
        
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        yield call(UpdateShippingMethodService(
            anonymousToken,
            loginToken,
            checkoutApi
        ), shippingId)
        let { data }= loginToken != null ? 
        yield call(GetShoppingCartService(
            anonymousToken,
            loginToken,
            checkoutApi,
            header
        )) : 
        yield call(GetAnonUserCart(
            anonymousToken,            
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
        const anonymousToken = config.get("anonymousToken")
        
        const {data} = yield call(DeleteProductService(
            anonymousToken,
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

export function* deleteAllProductsSaga(){
    yield takeEvery(
        actionTypes.REMOVE_ALL_PRODUCTS,
        deleteAllProductsHandler
    )
}

export function* deleteAllProductsHandler(action) {
    try{

        const config = yield select( state => state.config )
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const anonymousToken = config.get("anonymousToken")        
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        console.log(DeleteAllProductsService)
        yield call(DeleteAllProductsService(
            loginToken, 
            checkoutApi)
        )

        let { data }= loginToken != null ? 
        yield call(GetShoppingCartService(
            anonymousToken,
            loginToken,
            checkoutApi,
            header
        )) : 
        yield call(GetAnonUserCart(
            anonymousToken,            
            checkoutApi,
            header
        ))        

       yield put(actions.loadShoppingCart(data))
        
    }catch(error) {
        yield(put(actions.errorThrown(error)))
    }
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
        const anonymousToken = config.get("anonymousToken")
        
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        const couponData = yield call(ApplyCouponCodeService(
            anonymousToken,
            loginToken,
            checkoutApi
        ), couponCode)

        if(couponData.data.errMsg)
            yield put(actions.getPromoError(couponData.data.errMsg))
        else
            yield put(actions.clearPromoError())
        
        let { data }= loginToken != null ? 
        yield call(GetShoppingCartService(
            anonymousToken,
            loginToken,
            checkoutApi,
            header
        )) : 
        yield call(GetAnonUserCart(
            anonymousToken,            
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
        const anonymousToken = config.get("anonymousToken")
        
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        yield call(DeleteCouponService(
            anonymousToken,
            loginToken,
            checkoutApi
        ), couponCode)

        let { data }= loginToken != null ? 
        yield call(GetShoppingCartService(
            anonymousToken,
            loginToken,
            checkoutApi,
            header
        )) : 
        yield call(GetAnonUserCart(
            anonymousToken,            
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
        const anonymousToken = config.get("anonymousToken")
        
        const {data} = yield call(GetCountryListService(
            anonymousToken,            
            loginToken,
            myAccountApi
        ))
        yield put(actions.putCountryList(data.locale.countryList))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* getRecommendationsSaga() {
    yield takeEvery(
        actionTypes.GET_RECOMMENDATIONS,
        getRecommendationsHandler
    )
}

export function* getRecommendationsHandler(action) {
    try {
        const config = yield select( state => state.config )
        const cart = yield select( state => state.cart )
        const products = cart.toJS().cartItems.data
        let prodIdString = "";
        for(let id in products) prodIdString += `&pid=${products[id].productId}` 

        const loginToken = config.get("loginToken")
        const recApi = config.get("recApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }

        const {data} = yield call(GetRecommendationsService(
            loginToken,
            recApi,
            header
        ), "m", prodIdString)

        yield put(actions.loadRecommendations(data.prodList))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}

export function* getWishlistSaga() {
    yield takeEvery(
        [actionTypes.GET_WISHLIST, actionTypes.SELECT_WISHLIST],
        getWishlistHandler
    )
}

export function* getWishlistHandler(action) {
    try {
        console.log('inside getwishlisthandler')
        const config = yield select(state => state.config)
        const loginToken = config.get("loginToken")
        const myAccountApi = config.get("myAccountApi")
        const header = {
            ihPref: "lc=en-US;ctc=JP;cc=USD"
        }
        const {folderName} = action.payload

        const {data} = yield call(GetWishListService(
            loginToken,
            myAccountApi,
            header
        ), folderName)
        yield put(actions.loadWishlist(data))
    }
    catch(error) {
        yield(put(actions.errorThrown(error)))
    }
}