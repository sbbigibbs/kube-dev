import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import Components from "iherb-components"
import selectors from "iherb-selectors"
import redux from "iherb-redux";
import * as toJs from "immutable"

export const selectorFactory = dispatch => createSelector([selectors.root.wishlist], (...args) => {
  const [
    wishlist
  ] = args

  const folderList = wishlist.getIn(["data","folderList"]).toJS()
  const folderNames = folderList.map(folder => {
    return folder.fn
  })
  const onSelectWishlist = (folderName) => dispatch(
    redux.workflowCart.actions.selectWishlist(folderName)
  )

  return {
    folderNames: folderNames,
    onSelectWishlist
  }
})

export default connectAdvanced(selectorFactory)(Components.WishlistBox)