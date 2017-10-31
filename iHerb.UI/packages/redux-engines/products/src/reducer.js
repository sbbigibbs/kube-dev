import initialState from "./initial-state"
import {fromJS} from "immutable"
import {actionTypes} from "@iherb/ui-redux-workflow-cart"

export default (state = initialState, action = {}) => {
    const callbacks = {
        [actionTypes.LOAD_SHOPPING_CART]: handleLoadShoppingCart
    }

    const callback = callbacks[action.type]

    return callback ? callback(state, action) : state
}

function handleLoadShoppingCart(state, action) {
    const prodList = action.payload.data.cart.prodList

    return prodList.reduce((state, product) => {
        const {
            pid,
            frontImg,
            prodName,
            shipWeightLbs,
            discountMsgLst,
            listPrice,
            discount
        } = product
        return state
            .setIn(["products", pid], fromJS({
                imageSource: frontImg,
                title: prodName,
                productId: pid,
                weight: shipWeightLbs,
                promo: discountMsgLst[0] || "",
                price: listPrice,
                discount: discount
            }))
            .updateIn(["orderBy"], orderBy => orderBy.push(pid))

    }, state)
}
