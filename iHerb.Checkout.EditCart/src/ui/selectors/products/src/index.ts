import {createSelector} from "reselect"
import root from "../../root/src/index"

const orderedProduct = createSelector(
    root.products,
    products => products
)

const productsData = createSelector(
    root.products,
    products => products.get("products")
)

export default {
    orderedProduct,
    productsData
}