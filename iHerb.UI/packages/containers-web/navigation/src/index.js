import React from "react"
import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import Navigation from "@iherb/ui-web-component-navigation"

export const selectorFactory = dispatch => state => {
    const goToCart = () => dispatch({
        type: "GO_TO_CART"
    })
    const goToWishList = () => dispatch({
        type: "GO_TO_WISHLIST"
    })
    const goToRecycleBin = () => dispatch({
        type: "GO_TO_RECYCLE_BIN"
    })

    return {
        goToCart,
        goToWishList,
        goToRecycleBin
    }
}

export default connectAdvanced(selectorFactory)(Navigation)