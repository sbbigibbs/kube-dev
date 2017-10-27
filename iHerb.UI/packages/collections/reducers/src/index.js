import cart from "@iherb/ui-redux-cart"
import shippingMethods from "@iherb/ui-redux-iherb-ui-component-shipping-methods"
import products from "@iherb/ui-redux-products"
import workflowCart from "@iherb/ui-redux-workflow-cart"
import config from "@iherb/ui-redux-config"
import wishlist from "@iherb/ui-redux-wishlist"

export default ({
    cart: cart.reducer,
    shippingMethods: shippingMethods.reducer,
    products: products.reducer,
    workflowCart: workflowCart.reducer,
    config: config.reducer,
    wishlist: wishlist.reducer
})
