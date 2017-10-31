import {fromJS} from "immutable"
import initialState from "./initial-state"
import workflowCart from "@iherb/ui-redux-workflow-cart"
import {v4} from "uuid"

const {
    LOAD_SHOPPING_CART,
    CHANGE_SHIPPING_METHOD,
    INCREMENT_CART_ITEM_QUANTITY,
    DECREMENT_CART_ITEM_QUANTITY,
    UPDATE_SELECTED_SHIPPING_METHOD,
    PUT_COUNTRY_LIST
} = workflowCart.actionTypes

export const callbacks = {
    [LOAD_SHOPPING_CART]: handleLoadShoppingCart,
    [UPDATE_SELECTED_SHIPPING_METHOD]: (state, action) => state
        .set("selectedShippingMethod", action.payload.shippingId),
    [INCREMENT_CART_ITEM_QUANTITY]: (state, action) => {
        const quantity = state
            .getIn(["cartItems", "data", action.payload.id, "quantity"])
        return state
            .setIn(["cartItems", "data", action.payload.id, "quantity"],
                quantity + 1)
    },
    [DECREMENT_CART_ITEM_QUANTITY]: (state, action) => {
        const quantity = state
            .getIn(["cartItems", "data", action.payload.id, "quantity"])
        return state
            .setIn(["cartItems", "data", action.payload.id, "quantity"],
                quantity - 1)
    }
}

export default (state = initialState, action = {}) => {
    const callback = callbacks[action.type]

    return callback ? callback(state, action) : state
}

function handleLoadShoppingCart(state, action) {
    const prodList = action.payload.data.cart.prodList

    return prodList.reduce((state, product) => {
        const guid = v4()
        const {
            pid,
            prodQty
        } = product

        return state
            .setIn(["cartItems", "data", guid], fromJS({
                id: guid,
                productId: pid,
                quantity: parseInt(prodQty)
            }))
            .updateIn(["cartItems", "orderBy"], orderBy => orderBy.push(guid))
    }, state)
}

