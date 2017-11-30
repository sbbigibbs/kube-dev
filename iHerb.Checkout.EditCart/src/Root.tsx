import React from "react"
import {render} from "react-dom"
//import {Cart, Navigation } from "iherb-containers"
import loadContainers from "iherb-containers"
import { 
    cart,
    shipping,
    products,
    workflowCart,
    config,
    wishlist} from 'iherb-redux'
import {createStore, combineReducers, applyMiddleware} from "redux"
import { Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import {Provider} from "react-redux"
import {
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

} from 'iherb-api'
import loadPages from 'iherb-pages'
//import {Wishlist} from 'iherb-pages'
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


export const run = (props) => {
    const {
        checkoutApi,
        myAccountApi,
        anonymousToken,
        loginToken,
        language,
        currency,
        country,
        basePath
    } = props

    const history = createBrowserHistory()

    const log = []
    const logger = store => next => (action): any =>  {
        log.push(action)
        next(action)
    }

    const navigator = store => next => action => {
        if(action.type === "GO_TO_CART")
            history.push(`${basePath}/`)

        if(action.type === "GO_TO_WISHLIST")
            history.push(`${basePath}/wishlist`)

        if(action.type === "GO_TO_RECYCLE_BIN")
            history.push(`${basePath}/recyclebin`)

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
            ...actionHandlers
        ]

    }

    const store = createStore(
        combineReducers({
            cart: cart.reducer,
            shippingMethods: shipping.reducer,
            products: products.reducer,
            workflowCart: workflowCart.reducer,
            config: config.reducer,
            wishlist: wishlist.reducer
        }),
        applyMiddleware(...middleware))

    const RecycleBin = () => <div>Recycle Bin</div>

    const getRoutes = async () => {
        const Containers = await loadContainers
        const Pages = await loadPages
        const Cart = Containers.Cart
        const Navigation = Containers.Navigation
        const Wishlist = Pages.Wishlist

        return <Provider store={store}>
            <div>
                <Navigation />
                <Router history={history}>
                    <div>
                        <Route exact path={`${basePath}/`} component={Cart} />
                        <Route exact path={`${basePath}/wishlist`} component={Wishlist} />
                        <Route exact path={`${basePath}/recyclebin`} component={RecycleBin} />
                    </div>
                </Router>
            </div>
        </Provider>
    }
    
    getRoutes().then(routes =>
        render(
            routes,
            document.getElementById("root"))
        )

    store.dispatch(workflowCart.actions.loadPage({
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
declare var _basePath: any;

const ugcToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGQ2NjM2ODUtMDVkMy00NjFkLTliOTItNWNiNzAxOGYyNTBkIiwibmJmIjoxNTA4Mjc1OTMxLCJleHAiOjE1MDg4ODA3MzEsImlzcyI6IlVHQ0FwaSJ9.X44YzGP3CAplg0pzFAoL1AJL353KYsl9nVY2DkLGdWU"
const checkoutApi = _checkoutAPI
const myAccountApi = _myaccountAPI
const anonymousToken = _customerId;
const loginToken = null;
const language = _language;
const country = _country;
const currency = _currency;
const basePath = _basePath;

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
    currency,
    basePath
})
