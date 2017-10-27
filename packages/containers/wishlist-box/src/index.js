import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import WishlistBox from "@iherb/ui-wishlist-box"
import {wishlist} from "@iherb/ui-selector-root"
import {actions} from "@iherb/ui-redux-workflow-cart"
import redux from "@iherb/ui-redux-workflow-cart";
import {toJS} from "immutable"

const selectors = [
  wishlist
]

export const selectorFactory = dispatch => createSelector(selectors, (...args) => {
  const [
    wishlist
  ] = args

  const folderList = wishlist.getIn(["data","folderList"]).toJS()
  const folderNames = folderList.map(folder => {
    return folder.fn
  })
  const onSelectWishlist = (folderName) => dispatch(
    redux.actions.selectWishlist(folderName)
  )

  return {
    folderNames: folderNames,
    onSelectWishlist
  }
})

export default connectAdvanced(selectorFactory)(WishlistBox)