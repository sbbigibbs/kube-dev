import React from "react"
import {render} from "react-dom"
import CartPage from "@iherb/ui-page-cart"
import WishListPage from "@iherb/ui-page-wishlist"
import {createStore, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux"
import {
  loadPageSaga,
  getShippingMethodsSaga,
  changeProductQuantitySaga,
  updateShippingMethodSaga,
  deleteProductSaga,
  errorThrownSaga,
  applyCouponCodeSaga,
  deleteCouponCodeSaga,
  postToWishlistSaga,
  getCountryListSaga,
  getRecommendationsSaga,
  getWishlistSaga
} from "@iherb/ui-saga-workflow-cart"
import {actions} from "@iherb/ui-redux-workflow-cart"
import reducers from "@iherb/ui-reducers"
import Navigation from "@iherb/ui-web-container-navigation"
import { Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"


export const run = (props) => {
    const {
        checkoutApi,
        myAccountApi,
        loginToken,
        language
    } = props

    const history = createBrowserHistory()

    const sagaMiddleware = createSagaMiddleware()
    const log = []

    const logger = store => next => action => {
        log.push(action)
        console.log(action)
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

    const middleware = [
        logger,
        navigator,
        sagaMiddleware
    ]

    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(...middleware))

    sagaMiddleware.run(loadPageSaga)
    sagaMiddleware.run(getShippingMethodsSaga)
    sagaMiddleware.run(changeProductQuantitySaga)
    sagaMiddleware.run(updateShippingMethodSaga)
    sagaMiddleware.run(deleteProductSaga)
    sagaMiddleware.run(errorThrownSaga)
    sagaMiddleware.run(applyCouponCodeSaga)
    sagaMiddleware.run(deleteCouponCodeSaga)
    sagaMiddleware.run(postToWishlistSaga)
    sagaMiddleware.run(getCountryListSaga)
//    sagaMiddleware.run(getRecommendationsSaga)
    sagaMiddleware.run(getWishlistSaga)

//    const WishList = () => <div>WishList</div>
    const RecycleBin = () => <div>Recycle Bin</div>

    render(
        <Provider store={store}>
            <div>
                <Navigation />
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={CartPage} />
                        <Route exact path="/wishlist" component={WishListPage} />
                        <Route exact path="/recyclebin" component={RecycleBin} />
                    </div>
                </Router>
            </div>
        </Provider>,
        document.getElementById("root")
    )

    store.dispatch(actions.loadPage({
        checkoutApi,
        myAccountApi,
        loginToken,
        language,
    }))

    return {
        log,
        store
    }
}