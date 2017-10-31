import React from "react"
import CartPage from "@iherb/ui-page-cart"
import {createStore, combineReducers, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducers from "@iherb/ui-reducers"
const ReactTestRenderer = require("react-test-renderer")

export const createSnapshot = (actions = []) => {
    const store = createStore(
        combineReducers(reducers))

    actions.forEach(action => store.dispatch(action))

    const renderer = ReactTestRenderer.create(<Provider store={store}>
        <CartPage />
    </Provider>)

    return renderer.toJSON()
}
