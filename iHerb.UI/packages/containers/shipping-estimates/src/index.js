import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import orderSummarySelector, {totalWeight} from "@iherb/ui-selector-order-summary"
import {workflowCart, config} from "@iherb/ui-selector-root"
import ShippingEstimates, {labels} from "@iherb/ui-component-shipping-estimates"
import {navigator} from "@iherb/ui-selector-root"
import {actions} from "@iherb/ui-redux-workflow-cart"
import Translator from "@iherb/ui-translations-cart"

const selectors = [
    workflowCart,
    config
]

export const selectorFactory = dispatch => createSelector(selectors, (...args) => {
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

export default connectAdvanced(selectorFactory)(ShippingEstimates)
