import React from "react"
import { View } from 'react-primitives';
import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import ShippingMethod from "@iherb/ui-component-shipping-method"
import cartWorkflow from "@iherb/ui-redux-workflow-cart"

const styles = {}
const selectorFactory = dispatch => (state, ownProps) => {
    const selectedShippingMethod = state.cart.get("selectedShippingMethod")
    const states = state.shippingMethods.get("orderBy").map( id => {
        const props = state
            .shippingMethods
            .getIn(["items", id])
            .toJS()
        const enabled = selectedShippingMethod === props.shippingMethodId
        const updateShippingMethod = () => dispatch(actions.updateSelectedShippingMethod(selectedShippingMethod))
        return {
            onClick: () => {
                dispatch(cartWorkflow
                .actions
                .updateSelectedShippingMethod(props.shippingMethodId))
            },
            ...props,
            enabled
        }
    }).toJS()

    return {
        shippingMethods: states
    }
}

export default connectAdvanced(selectorFactory)(props => <View style={styles.shippingMethods}>
    {props.shippingMethods.map(shippingMethodProps  => 
        <View style={styles.shippingMethod}> 
            <ShippingMethod 
                key={shippingMethodProps.shippingMethodId} 
                {...shippingMethodProps} /> 
        </View>
    )}
</View>)
