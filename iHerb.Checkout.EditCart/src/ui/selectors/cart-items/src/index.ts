import {createSelector} from "reselect"
import root from "../../root/src/index"

export default createSelector(
    root.cart,
    cart => cart
        .getIn(["cartItems", "orderBy"])
        .map(id => cart.getIn(["cartItems", "data", id])))
