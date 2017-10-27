import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import orderSummarySelector from "@iherb/ui-selector-order-summary"
import OrderSummary from "@iherb/ui-component-order-summary"
import {workflowCart, shippingMethods, config} from "@iherb/ui-selector-root"
import Translator from "@iherb/ui-translations-cart"
import {labels} from "@iherb/ui-component-order-summary"

const selectors = [
    workflowCart,
    shippingMethods,
    config
]

const selectorFactory = dispatch => (state, ownProps) => {
    const selectedShippingMethod = state.cart.get("selectedShippingMethod")
    const subtotal = state.workflowCart.getIn(["cart", "subTotal"])
    let shipping = ""
    let orderTotal = state.workflowCart.getIn(["cart", "orderTotal"])
    if(selectedShippingMethod) {
        shipping = state.shippingMethods.getIn(["items", selectedShippingMethod, "price"])
        if(parseFloat(shipping.slice(1))) orderTotal = "$" + (parseFloat(subtotal.slice(1)) + parseFloat(shipping.slice(1))).toString()
    }

    const lang = state.config.get("language")
    const translator = new Translator(lang);
    return {
        subtotal,
        shipping,
        tax: state.workflowCart.getIn(["cart", "tax"]),
        rewards: state.workflowCart.getIn(["cart", "rewards"]),
        orderTotal,
        labels: translator.translateLabels(labels)
    }
}

export default connectAdvanced(createSelector(selectorFactory))(OrderSummary)
