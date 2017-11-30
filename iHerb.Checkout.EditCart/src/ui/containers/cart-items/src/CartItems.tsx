import { createSelector } from "reselect";
import { workflowCart } from "iherb-redux";
import { CartItem } from 'iherb-components';
import { cartItems, products, root } from 'iherb-selectors';
import * as translations from 'iherb-translations';

var orderedCartItems = cartItems;
var productsData = products.productsData;
var cart = root.workflowCart;
var config = root.config;
var Translator = translations.cart;
var labels = CartItem.labels

export default dispatch => createSelector([
    orderedCartItems,
    productsData,
    cart,
    config
], (...args) => {
    const [
        orderedCartItems,
        productsData,
        cart,
        config
    ] = args

    const createOnIncrement = ({productId, quantity}) => () => dispatch(workflowCart.actions.changeProductQuantity({productId, quantity: parseInt(quantity) + 1}))
    const createOnDecrement = ({productId, quantity}) => () => dispatch(workflowCart.actions.changeProductQuantity({productId, quantity: parseInt(quantity) - 1}))
    const createOnRequestProductQuantityChange = ({productId}) => () => dispatch(
        workflowCart.actions.requestProductQuantityChange({productId}))
    const createChangeProductQuantity = ({productId}) => (quantity) => dispatch(
        workflowCart.actions.changeProductQuantity({productId, quantity}))
    const createOnDeleteProduct = ({productId}) => () => dispatch(workflowCart.actions.deleteProductFromCart({productId}))    
    const onRefreshCart = () => dispatch(
        workflowCart.actions.deleteAllProductsFromCart()
        //redux.workflowCart.actions.loadPage()
    )
    const lang = config.get("language")
    const translator = new Translator(lang);

    const createOnPostToWishList = ({productId}) => () => dispatch(workflowCart.actions.postWishList({productId})) 
    const basketErrorList = cart.getIn(["cart", "basketErrLst"]).toJS()
    const isBasketErrorEmpty = basketErrorList.length === 0
    const cartItems = cart.getIn(["cart", "prodList"])
        .map(props => {
            const _labels = translator.translateLabels(labels)

            const productId = props.get("pid")
            const quantity = props.get("prodQty")
            const imageSource = props.get("frontImg")
            const title = props.get("prodName")
            const weight = props.get("shipWeightLbs")
            const discountMsgList = props.get("discountMsgLst").toJS()
            const price = props.get("listPrice")
            const discountsAppliedList = props.get("discountsAppliedLst").toJS()
            const total = props.get("totalPrice")
            const totalDiscount = props.get("discount")
            const errorMsgList = props.get("warnMsgLst").toJS()
            const weightKg = (0.453592 * weight).toFixed(2)
            const isDiscontinued = props.get("isDiscontinued")

            return {
                labels: _labels,
                productId,
                quantity,
                imageSource,
                title,
                weight,
                discountMsgList,
                price,
                discountsAppliedList,
                total,
                totalDiscount,
                onIncrement: createOnIncrement({productId, quantity}),
                onDecrement: createOnDecrement({productId, quantity}),
                onRequestProductQuantityChange: createOnRequestProductQuantityChange({productId}),
                onCreateChangeProductQuantity: createChangeProductQuantity({productId}),
                onDeleteProduct: createOnDeleteProduct({productId}),
                onPostToWishlist: createOnPostToWishList({productId}),
                errorMsgList,
                weightKg,
                isDiscontinued
            }
        })
        .toJS()

    return {
        cartItems,
        onRefreshCart,
        basketErrorList,
        isBasketErrorEmpty
    }
})
