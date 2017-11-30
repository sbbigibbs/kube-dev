import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import { OrderSummary } from 'iherb-components';
import { orderSummary, root } from 'iherb-selectors';
import * as translations from 'iherb-translations';

var orderSummarySelector = orderSummary
var workflowCart = root.workflowCart
var shippingMethods = root.shippingMethods
var config = root.config
var Translator = translations.cart
var labels = OrderSummary.labels

const selectorFactory = dispatch => (state, ownProps) => {
    const toCheckout = (e) => { 
        document.cookie = `ihr-lac=rturl=${location.href};domain=${location.host.match(/\.[^$]+/)[0]}`;
        location.href = '/transactions/checkout' 
    }
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
        labels: translator.translateLabels(labels),
        toCheckout
    }
}

export default connectAdvanced(createSelector([ workflowCart, shippingMethods, config ], selectorFactory))(OrderSummary.Component)
