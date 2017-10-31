import {createSelector} from "reselect"
import root from "../../root/src/index"

export default createSelector([ root.cart, root.shippingMethods ], (...args) => {
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
