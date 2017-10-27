import React from "react"

export default props => {
    const {
        goToCart,
        goToWishList,
        goToRecycleBin
    } = props

    return <ul>
        <li onClick={goToCart}>Cart</li>
        <li onClick={goToWishList}>Wishlist</li>
        <li onClick={goToRecycleBin}>Recycle Bin</li>
    </ul>
}