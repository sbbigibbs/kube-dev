import redux from "@iherb/ui-redux-workflow-cart";
import {createSelector} from "reselect";
import {orderedCartItems} from "@iherb/ui-selector-cart-items";
import {productsData} from "@iherb/ui-selector-products";
import {workflowCart, config} from "@iherb/ui-selector-root";
import Translator from "@iherb/ui-translations-cart"
import {labels} from "@iherb/ui-component-cart-item"

const selectors = [
    orderedCartItems,
    productsData,
    workflowCart,
    config
]

export default dispatch => createSelector(selectors, (...args) => {
    const [
        orderedCartItems,
        productsData,
        workflowCart,
        config
    ] = args

    const createOnIncrement = ({productId, quantity}) => () => dispatch(redux.actions.changeProductQuantity({productId, quantity: parseInt(quantity) + 1}))
    const createOnDecrement = ({productId, quantity}) => () => dispatch(redux.actions.changeProductQuantity({productId, quantity: parseInt(quantity) - 1}))
    const createOnRequestProductQuantityChange = ({productId}) => () => dispatch(
        redux.actions.requestProductQuantityChange({productId}))
    const createChangeProductQuantity = ({productId}) => (quantity) => dispatch(
        redux.actions.changeProductQuantity({productId, quantity}))
    const createOnDeleteProduct = ({productId}) => () => dispatch(redux.actions.deleteProductFromCart({productId}))    
    const onRefreshCart = () => dispatch(
        //redux.actions.loadPage()
        redux.actions.deleteAllProductsFromCart()
    )
    const onSelectWishlist = () => dispatch(
        redux.actions.displayWishlist()
    )
    const lang = config.get("language")
    const translator = new Translator(lang);

    const createOnPostToWishList = ({productId}) => () => dispatch(redux.actions.postWishList({productId})) 
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
        isBasketErrorEmpty,
        onSelectWishlist
    }
})
