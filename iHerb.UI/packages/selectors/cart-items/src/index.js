import {createSelector} from "reselect"
import {cart} from "@iherb/ui-selector-root"

export const orderedCartItems = createSelector(
    cart,
    cart => cart
        .getIn(["cartItems", "orderBy"])
        .map(id => cart.getIn(["cartItems", "data", id])))
