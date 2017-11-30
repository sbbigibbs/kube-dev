import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import { cart } from 'iherb-redux';
import { root } from 'iherb-selectors';
import { ShippingEstimates } from 'iherb-components';
import translations from 'iherb-translations';

var workflowCart = root.workflowCart
var config = root.config
var actions = cart.actions
var Translator = translations.cart
var labels = ShippingEstimates.labels

export const selectorFactory = dispatch => createSelector([ workflowCart, config ], (...args) => {
    const [
        workflowCart,
        config
    ] = args

    const zipcode = workflowCart.get("zipcode")
    const _zipcode = parseInt(zipcode)
    const totalWeight = workflowCart.get("cart").get("totalWeightLbs");
    const countryList = workflowCart.get("countryList")
    const country = workflowCart.get("country")
    const countryCode = workflowCart.get("countryCode")
    const getShippingMethods = () => dispatch(actions.getShippingMethods(_zipcode, countryCode))
    const onChangeZipCode = (zipcode) => {
        dispatch(actions.changeZipCode(zipcode))
    }
    const requiresZip = workflowCart.get("requiresZip")
    const lang = config.get("language")
    const translator = new Translator(lang)

    const onChangeDestination = () => dispatch(actions.changeDestination())
    return {
        totalWeight,
        zipcode,
        onChangeZipCode,
        getShippingMethods,
        onChangeDestination,
        country,
        requiresZip,
        labels: translator.translateLabels(labels)
    }
})

export default connectAdvanced(selectorFactory)(ShippingEstimates.Component)
