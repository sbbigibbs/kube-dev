import React from "react"
import { View, Text } from 'react-primitives';
import CartItems from "./cart-items"
import ShippingEstimates from "./shipping-estimates"
import OrderSummary from "./order-summary"

const styles = {
    page: {
        marginLeft: 16
    },
    cart: {
        maxWidth: 1000,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 15,
        paddingRight: 15
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
        flex: 1
        
    }
}

export default () => <View>
    <View>
        <CartItems />
        <View style={styles.shippingSummary}>
            <View style={styles.shipping}>
                <ShippingEstimates />
            </View>
            <View style={styles.summary}>
                <OrderSummary />
            </View>
        </View>
    </View>
</View>