import {createSelector} from "reselect"
import {products} from "@iherb/ui-selector-root"

export const orderedProduct = createSelector(
    products,
    products => products
)

export const productsData = createSelector(
    products,
    products => products.get("products")
)
