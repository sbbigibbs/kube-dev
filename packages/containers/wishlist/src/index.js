import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import WishlistItems from "@iherb/ui-component-wishlist-items"
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

  const folderList = wishlist.getIn(["data", "folderList"]).toJS()
  const folderName = wishlist.getIn(["data", "fn"])
  const onSelectWishlistDropdown = () => dispatch(
    redux.actions.displayWishlistSelection()
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
    folderName
  }
})

export default connectAdvanced(selectorFactory)(WishlistItems)