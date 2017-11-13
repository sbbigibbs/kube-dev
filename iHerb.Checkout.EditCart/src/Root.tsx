import React from "react"
import {render} from "react-dom"
import Containers from "./ui/containers/index"
import sagas from './ui/sagas/index'
import redux from './ui/redux/index'
import {createStore, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import { Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import {Provider} from "react-redux"
import api from 'iherb-api'
import {Wishlist} from 'iherb-pages'
import { LoadPageHandler, 
    ApplyCouponCodeHandler, 
    ChangeProductQuantityHandler, 
    UpdateShoppingCartHandler,
    DeleteCouponCodeHandler,
    DeleteProductHandler,
    ErrorThrownHandler,
    GetCountryListHandler,
    GetShippingMethodsHandler,
    GetWishlistHandler,
    PostToWishlistHandler,
    UpdateShippingMethodHandler
} from "iherb-middleware"
const co = require("co")

const {
    GetShoppingCartService,
    ApplyCouponCodeService,
    UpdateProdQtyService,
    DeleteCouponService,  
    DeleteProductService,
    GetCountryListService,
    GetShippingMethodsService,
    GetWishListService,
    PostToWishListService,
    UpdateShippingMethodService,
    GetAnonUserCart

} = api

export const run = (props) => {
    const {
        checkoutApi,
        myAccountApi,
        anonymousToken,
        loginToken,
        language,
        currency,
        country
    } = props

    const history = createBrowserHistory()

    const sagaMiddleware = createSagaMiddleware()
    const log = []
    const logger = store => next => (action): any =>  {
        log.push(action)
        next(action)
    }

    const navigator = store => next => action => {
        if(action.type === "GO_TO_CART")
            history.push("/")

        if(action.type === "GO_TO_WISHLIST")
            history.push("/wishlist")

        if(action.type === "GO_TO_RECYCLE_BIN")
            history.push("/recyclebin")

        next(action)
    }

    const actionHandlers = [
        LoadPageHandler({
            GetShoppingCartService,
            GetAnonUserCart
        }),
        ApplyCouponCodeHandler({
            ApplyCouponCodeService
        }),
        ChangeProductQuantityHandler({
            UpdateProdQtyService
        }),
        DeleteCouponCodeHandler({
            DeleteCouponService
        }),
        UpdateShoppingCartHandler({
            GetShoppingCartService,
            GetAnonUserCart
        }),
        DeleteProductHandler({
            DeleteProductService
        }),
        ErrorThrownHandler({
        }),
        GetCountryListHandler({
            GetCountryListService
        }),
        GetShippingMethodsHandler({
            //broken
            GetShippingMethodsService
        }),
        GetWishlistHandler({
            //Myaccount api down
            GetWishListService
        }),
        PostToWishlistHandler({
            //Myaccount api down
            PostToWishListService
        }),
        UpdateShippingMethodHandler({
            UpdateShippingMethodService
        })
    ]

    const middleware = createMiddleware()

    function createMiddleware() {
        
        return [
            logger,
            navigator,
            sagaMiddleware,
            ...actionHandlers
        ]

    }

    const store = createStore(
        combineReducers({
            cart: redux.cart.reducer,
            shippingMethods: redux.shipping.reducer,
            products: redux.products.reducer,
            workflowCart: redux.workflowCart.reducer,
            config: redux.config.reducer,
            wishlist: redux.wishlist.reducer
        }),
        applyMiddleware(...middleware))
    
        // sagaMiddleware.run(sagas.loadPageSaga)
        // sagaMiddleware.run(sagas.getShippingMethodsSaga)
        // sagaMiddleware.run(sagas.changeProductQuantitySaga)
        // sagaMiddleware.run(sagas.updateShippingMethodSaga)
        // sagaMiddleware.run(sagas.deleteProductSaga)
        // sagaMiddleware.run(sagas.errorThrownSaga)
        // sagaMiddleware.run(sagas.applyCouponCodeSaga)
        // sagaMiddleware.run(sagas.deleteCouponCodeSaga)
        // sagaMiddleware.run(sagas.getCountryListSaga)
        // sagaMiddleware.run(sagas.postToWishlistSaga)
        //sagaMiddleware.run(sagas.getRecommendationsSaga)
        //sagaMiddleware.run(sagas.getWishlistSaga)

    const RecycleBin = () => <div>Recycle Bin</div>
    
    render(
        <Provider store={store}>
            <div>
                <Containers.Navigation />
                <Router history={history}>
                    <div>
                        <Route exact path="/EditCart" component={Containers.Cart} />
                        <Route exact path="/wishlist" component={Wishlist} />
                        <Route exact path="/recyclebin" component={RecycleBin} />
                    </div>
                </Router>
            </div>
        </Provider>,
        document.getElementById("root")
    )

    store.dispatch(redux.workflowCart.actions.loadPage({
        checkoutApi,
        myAccountApi,
        anonymousToken,
        loginToken,
        language,
        currency,
        country
    }))

    return {
        log,
        store
    }
}

declare var _checkoutAPI: any;
declare var _myaccountAPI: any;
declare var _customerId: any;
declare var _language: any;
declare var _currency: any;
declare var _country: any;

const ugcToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGQ2NjM2ODUtMDVkMy00NjFkLTliOTItNWNiNzAxOGYyNTBkIiwibmJmIjoxNTA4Mjc1OTMxLCJleHAiOjE1MDg4ODA3MzEsImlzcyI6IlVHQ0FwaSJ9.X44YzGP3CAplg0pzFAoL1AJL353KYsl9nVY2DkLGdWU"
const checkoutApi = _checkoutAPI
const myAccountApi = _myaccountAPI
const anonymousToken = _customerId;
const loginToken = null;
const language = _language;
const country = _country;
const currency = _currency;

export const {
  log, 
  store
} = run({
    checkoutApi,
    myAccountApi,
    anonymousToken,
    loginToken,
    language,
    country,
    currency
})
