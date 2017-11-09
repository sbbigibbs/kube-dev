import React from "react"
import { View, Text } from 'react-primitives';
import OrderSummary from "../../order-summary/src/index"
import ShippingMethods from "../../shipping-methods/src/index"
import CartItems from "../../cart-items/src/index"
import ShippingEstimates from "../../shipping-estimates/src/index"
import PromoCode from "../../promo-code/src/index"
import {connectAdvanced} from "react-redux"

const styles = {
    page: {
        marginLeft: 16
    },
    cart: {
        maxWidth: 1400,
        marginLeft: "auto",
        marginRight: "auto"
    },
    cartEmpty: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    cartEmptyHeader: {
        fontFamily: 'Lato',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cartEmptysubtitle: {
        fontFamily: 'Lato',
        fontSize: 14,
        color: '#676767',
        textAlign: 'center'
    },
    shippingSummary: {
        flex: 1,
        flexDirection: "row",
        
        flexWrap: "wrap"
        
    },
    shipping: {
        minWidth:320,
        flex: 3,
        marginRight: 20
        
        
    },
    summary: {
        minWidth: 335,
        flex: 1,
        
    },
}

export const Cart = ({isEmpty}) => {
    if(isEmpty)
        return <View style={styles.cartEmpty}>
            <i className="icon-cart"></i>
            <View style={styles.cartEmptyHeader}>
                <Text style={styles.cartEmptyHeader}>Your Shopping Cart is Empty</Text>
            </View>
            <View style={styles.cartEmptysubtitle}>
                <Text style={styles.cartEmptysubtitle}>Shop 35,000+ Top Brand Healthy Products and receive Best Overall Savings for Orders over $40 USD.</Text>
            </View>
        </View>

    return <View style={styles.cart}>
        <CartItems />
        <PromoCode/>
        <OrderSummary />
        <ShippingEstimates />
        <ShippingMethods />
    </View>
}

const selectorFactory = dispatch => state => {
    return {
        isEmpty: (state.cart.getIn(["cartItems", "orderBy"]).size === 0)
    }
}

export default connectAdvanced(selectorFactory)(Cart)
