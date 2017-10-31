import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import * as toJS from "immutable"
import redux from 'iherb-redux';
import Components from 'iherb-components';
import selectors from 'iherb-selectors';
import translations from 'iherb-translations';

var PromoCode = Components.PromoCode.Component
var workflowCart = selectors.root.workflowCart
var config = selectors.root.config
var actions = redux.cart.actions
var Translator = translations.cart
var labels = Components.PromoCode.labels

export const selectorFactory = dispatch => createSelector([ workflowCart, config ], (...args) => {
    const [
        workflowCart,
        config
    ] = args

    let discountMsgPriceList = []
    if(workflowCart.get("cart").get("discountMsgPriceLst")) {
        discountMsgPriceList = workflowCart.get("cart").get("discountMsgPriceLst").toJS()
    }
    const onChangeCouponCode = couponCode => dispatch(actions.changeCouponCode(couponCode))
    const couponCode = workflowCart.get("couponCode")
    const onApplyCouponCode = () => dispatch(actions.applyCouponCode(couponCode))
    const savings = workflowCart.get("cart").get("savings")
    const promoError = workflowCart.get("promoCodeError")
    const onDeleteCouponCode = (coupon) => dispatch(actions.deleteCouponCode(coupon))
    let couponList = []

    const lang = config.get("language")
    const translator = new Translator(lang);
    if(workflowCart.get("cart").get("appliedCouponsLst")) {
        couponList = workflowCart.get("cart").get("appliedCouponsLst").toJS()
    }

    return {
        couponCode,
        onChangeCouponCode,
        onApplyCouponCode,
        couponList,
        savings,
        onDeleteCouponCode,
        discountMsgPriceList,
        promoError,
        labels: translator.translateLabels(labels)
    }
})

export default connectAdvanced(selectorFactory)(PromoCode)
