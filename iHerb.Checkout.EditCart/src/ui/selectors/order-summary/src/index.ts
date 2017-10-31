import {createSelector} from "reselect"
import root from "../../root/src/index"

export const shippingPrice = createSelector([root.cart, root.shippingMethods], (...args) => {
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

export const subtotal = createSelector([root.cart, root.products], (...args) => {
    const [
        cart,
        products
    ] = args

    const subtotal = cart.getIn(["cartItems", "data"]).reduce((sum, item) => {
        const productId = item.get("productId")
        const quantity = item.get("quantity")
        const price = products.getIn(["products", productId, "price"])
        return sum + (price * quantity)
    },0)

    return subtotal
})

export const tax = createSelector(subtotal, subtotal => subtotal * 0.08)

export const totalWeight = createSelector([ root.cart, root.products ], (...args) => {
    const [
        cart,
        products
    ] = args

    const weight = cart.getIn(["cartItems", "data"]).reduce((sum, item) => {
        const productId = item.get("productId")
        const quantity = item.get("quantity")
        const weight = products.getIn(["products", productId, "weight"])
        return sum + (weight * quantity)
    },0)

    return weight
})

export default createSelector([shippingPrice, subtotal, tax], (shippingPrice, subtotal, tax) => {
    return {
        subtotal,
        shipping: shippingPrice,
        tax,
        rewards: "",
        orderTotal: (subtotal + shippingPrice + tax)
    }
})
