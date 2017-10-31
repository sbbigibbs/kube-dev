import React from "react"
import {render} from "react-dom"
import Containers from "./ui/containers/index"
import sagas from './ui/sagas/index'
import redux from './ui/redux/index'
import {createStore, combineReducers, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import {Provider} from "react-redux"

export const run = (props) => {
    const {
        checkoutApi,
        myAccountApi,
        loginToken,
        language
    } = props

    const sagaMiddleware = createSagaMiddleware()
    const log = []
    const logger = store => next => (action): any =>  {
        log.push(action)
        next(action)
    }

    const store = createStore(
        combineReducers({
            cart: redux.cart.reducer,
            shippingMethods: redux.shipping.reducer,
            products: redux.products.reducer,
            workflowCart: redux.workflowCart.reducer,
            config: redux.config.reducer,
        }),
        applyMiddleware(logger),
        applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(sagas.loadPageSaga)
    sagaMiddleware.run(sagas.getShippingMethodsSaga)
    sagaMiddleware.run(sagas.changeProductQuantitySaga)
    sagaMiddleware.run(sagas.updateShippingMethodSaga)
    sagaMiddleware.run(sagas.deleteProductSaga)
    sagaMiddleware.run(sagas.errorThrownSaga)
    sagaMiddleware.run(sagas.applyCouponCodeSaga)
    sagaMiddleware.run(sagas.deleteCouponCodeSaga)
    sagaMiddleware.run(sagas.postToWishlistSaga)

    render(
        <Provider store={store}>
            <Containers.Cart />
        </Provider>,
        document.getElementById("root"), () => {}
    )

    store.dispatch(redux.workflowCart.actions.loadPage({
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

declare var _checkoutAPI: any;
declare var _myaccountAPI: any;
declare var _customerId: any;
declare var _language: any;

const ugcToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNGQ2NjM2ODUtMDVkMy00NjFkLTliOTItNWNiNzAxOGYyNTBkIiwibmJmIjoxNTA4Mjc1OTMxLCJleHAiOjE1MDg4ODA3MzEsImlzcyI6IlVHQ0FwaSJ9.X44YzGP3CAplg0pzFAoL1AJL353KYsl9nVY2DkLGdWU"
const checkoutApi = _checkoutAPI
const myAccountApi = _myaccountAPI
const loginToken = _customerId;
const language = _language;

export const {
  log, 
  store
} = run({
  checkoutApi,
  myAccountApi,
  loginToken,
  language
})
