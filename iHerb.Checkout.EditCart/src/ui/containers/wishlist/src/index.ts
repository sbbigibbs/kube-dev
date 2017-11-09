import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import Components from "iherb-components"
import selectors from "iherb-selectors"
import redux from "iherb-redux";
import * as toJS from "immutable"

export const selectorFactory = dispatch => createSelector([selectors.root.wishlist], (...args) => {
  const [
    wishlist
  ] = args

  const folderList = wishlist.getIn(["data", "folderList"]).toJS()
  const folderName = wishlist.getIn(["data", "fn"])
  const onSelectWishlistDropdown = () => dispatch(
    redux.workflowCart.actions.displayWishlistSelection()
  )
  const onSelectWishlist =(selectedList) => dispatch(
    redux.workflowCart.actions.selectWishlist(selectedList)
  )

  const folderNames = folderList.map(folder => {
    return folder.fn
  })

  const prodList = wishlist.getIn(["data", "prodList"])
    .map(props => {
      const rating = props.get("avgRating")
      const price = props.get("discountedPrice")
      const image = props.get("frontImg")
      const isAvailable = props.get("isAvailable")
      const prodName = props.get("prodName")
      const ratingCount = props.get("ratingCount")

      return {
        rating,
        price,
        image,
        isAvailable,
        prodName,
        ratingCount
      }
    }).toJS()

  return {
    prodList,
    folderNames,
    onSelectWishlistDropdown,
    folderName,
    onSelectWishlist
  }
})

export default connectAdvanced(selectorFactory)(Components.WishlistItems)