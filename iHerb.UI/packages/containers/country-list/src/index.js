import React from "react"
import { View } from 'react-primitives';
import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import ShippingCountrySelector from "@iherb/ui-shipping-country-selector"
import {workflowCart} from "@iherb/ui-selector-root"
import {actions} from "@iherb/ui-redux-workflow-cart"
import {toJS} from "immutable"
import languages from "./languages"

const selectors = [
    workflowCart
]

export const selectorFactory = dispatch => createSelector(selectors, (...args) => {
    const [
        workflowCart
    ] = args

    const countryList = workflowCart.get("countryList").slice(0, 31)
    console.log('countryList inside countryList container')
    const zipCode = workflowCart.get("zipcode")
    const onUpdateShippingCountry = (country, requiresZip, countryCode) => {
        dispatch(actions.updateShippingCountry(country, requiresZip, countryCode))
        if(!requiresZip) dispatch(actions.getShippingMethods(zipCode, countryCode))
    }
    return {
        countryList,
        onUpdateShippingCountry
    }
})

export default connectAdvanced(selectorFactory)(props => <View>
    {props.countryList.map(country =>
        <ShippingCountrySelector
            countryCode={country.code}
            countryName={country.name} 
            requiresZip={country.requiresZip}
            onUpdateShippingCountry={props.onUpdateShippingCountry} />
    )}
    
</View>)
