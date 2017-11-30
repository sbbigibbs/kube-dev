import React from "react"
import { View } from 'react-primitives';
import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import { cart } from 'iherb-redux';
import { ShippingMethod } from 'iherb-components';

var cartWorkflow = cart
var actions = cart.actions

const styles = { shippingMethod:{}, shippingMethods:{} }
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

class ShippingMethods extends React.Component {
    props:any
    constructor(props) {
        super(props);
      }
    

    render() {
    return <View style={styles.shippingMethods}>
        {this.props.shippingMethods.map(shippingMethodProps  => 
            <View style={styles.shippingMethod}> 
                <ShippingMethod 
                    key={shippingMethodProps.shippingMethodId} 
                    {...shippingMethodProps} /> 
            </View>
        )}
    </View>
    }
}

export default connectAdvanced(selectorFactory)(ShippingMethods)
