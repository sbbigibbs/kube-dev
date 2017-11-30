import React from "react"
import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import { workflowCart} from "iherb-redux"
import { Navigation } from "iherb-components"

export const selectorFactory = dispatch => state => {
    const cartSize = state.workflowCart.getIn(['cart', 'prodList']).toJS().length
    const wishlistSize = state.wishlist.getIn(['data', 'folderList']).toJS().length

    const goToCart = () => dispatch({
        type: "GO_TO_CART"
    })
    const goToWishList = () => dispatch({
        type: "GO_TO_WISHLIST"
    })
    const goToRecycleBin = () => dispatch({
        type: "GO_TO_RECYCLE_BIN"
    })

    const toggleActiveTab = (tab) => {
      dispatch(workflowCart.actions.toggleTab(tab))
    }

    const currentTab = state.workflowCart.get('selectedTab')

    let tabData = [
      {
        label: `Cart (${cartSize})`,
        value: 'cart',
        active: false,
        routeFunc: goToCart
      },
      {
        label: `Lists (${wishlistSize})`,
        value: 'wishlist',
        active: false,
        routeFunc: goToWishList
      },
      {
        label: 'Recycle Bin',
        value: 'recycle',
        active: false,
        routeFunc: goToRecycleBin
      }
    ]

    tabData = tabData.map(tab => {
      if(tab.value === currentTab) tab.active = true
      return tab
    })

    return {
        goToCart,
        goToWishList,
        goToRecycleBin,
        cartSize,
        wishlistSize,
        toggleActiveTab,
        tabData
    }
}

export default connectAdvanced(selectorFactory)(Navigation)