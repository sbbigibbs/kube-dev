import {createSelector} from "reselect"
import {cart, shippingMethods} from "@iherb/ui-selector-root"

const selectors = [
    cart,
    shippingMethods
]
export const shippingPrice = createSelector(selectors, (...args) => {
    const [
        cart,
        shippingMethods
    ] = args

    const selectedShippingMethod = cart.get("selectedShippingMethod")
    const price = shippingMethods.getIn([
        "items", 
        selectedShippingMethod, 
        "price", 
        "default"])

    return price
})
