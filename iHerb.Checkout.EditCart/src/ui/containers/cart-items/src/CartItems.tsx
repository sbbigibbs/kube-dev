import {createSelector} from "reselect";
import redux from "iherb-redux";
import Components from 'iherb-components';
import selectors from 'iherb-selectors';
import translations from 'iherb-translations';

var orderedCartItems = selectors.cartItems;
var productsData = selectors.products.productsData;
var workflowCart = selectors.root.workflowCart;
var config = selectors.root.config;
var Translator = translations.cart;
var labels = Components.CartItem.labels

export default dispatch => createSelector([
    orderedCartItems,
    productsData,
    workflowCart,
    config
], (...args) => {
    const [
        orderedCartItems,
        productsData,
        workflowCart,
        config
    ] = args

    const createOnIncrement = ({productId, quantity}) => () => dispatch(redux.workflowCart.actions.changeProductQuantity({productId, quantity: parseInt(quantity) + 1}))
    const createOnDecrement = ({productId, quantity}) => () => dispatch(redux.workflowCart.actions.changeProductQuantity({productId, quantity: parseInt(quantity) - 1}))
    const createOnRequestProductQuantityChange = ({productId}) => () => dispatch(
        redux.workflowCart.actions.requestProductQuantityChange({productId}))
    const createChangeProductQuantity = ({productId}) => (quantity) => dispatch(
        redux.workflowCart.actions.changeProductQuantity({productId, quantity}))
    const createOnDeleteProduct = ({productId}) => () => dispatch(redux.workflowCart.actions.deleteProductFromCart({productId}))    
    const onRefreshCart = () => dispatch(
        redux.workflowCart.actions.loadPage()
    )
    const lang = config.get("language")
    const translator = new Translator(lang);

    const createOnPostToWishList = ({productId}) => () => dispatch(redux.workflowCart.actions.postWishList({productId})) 
    const basketErrorList = workflowCart.getIn(["cart", "basketErrLst"]).toJS()
    const isBasketErrorEmpty = basketErrorList.length === 0
    const cartItems = workflowCart.getIn(["cart", "prodList"])
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
