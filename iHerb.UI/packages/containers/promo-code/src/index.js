import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import PromoCode from "@iherb/ui-component-promo-code"
import {workflowCart, config} from "@iherb/ui-selector-root"
import {actions} from "@iherb/ui-redux-workflow-cart"
import {toJS} from "immutable"
import Translator from "@iherb/ui-translations-cart"
import {labels} from "@iherb/ui-component-promo-code"

const selectors = [
    workflowCart,
    config
]

export const selectorFactory = dispatch => createSelector(selectors, (...args) => {
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
