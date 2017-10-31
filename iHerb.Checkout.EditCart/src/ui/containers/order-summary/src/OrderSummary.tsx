import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import Components from 'iherb-components';
import selectors from 'iherb-selectors';
import translations from 'iherb-translations';

var orderSummarySelector = selectors.orderSummary
var OrderSummary = Components.OrderSummary.Component;
var workflowCart = selectors.root.workflowCart
var shippingMethods = selectors.root.shippingMethods
var config = selectors.root.config
var Translator = translations.cart
var labels = Components.CartItem.labels

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

export default connectAdvanced(createSelector([ workflowCart, shippingMethods, config ], selectorFactory))(OrderSummary)
