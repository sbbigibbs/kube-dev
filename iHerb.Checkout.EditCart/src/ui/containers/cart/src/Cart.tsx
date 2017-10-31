import React from "react"
import { View, Text } from 'react-primitives';
import OrderSummary from "../../order-summary/src/index"
import ShippingMethods from "../../shipping-methods/src/index"
import CartItems from "../../cart-items/src/index"
import ShippingEstimates from "../../shipping-estimates/src/index"
import PromoCode from "../../promo-code/src/index"

const styles = {
    page: {
        marginLeft: 16
    },
    cart: {
        maxWidth: 1400,
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
        flex: 1,
        
    },
    
    
}

export default () => <View style={styles.cart}>
    <View>
        <CartItems />
        
        <View style={styles.shippingSummary}>
            <View style={styles.shipping}>
                <PromoCode/>
                <ShippingEstimates />
                <ShippingMethods />
            </View>
            <View style={styles.summary}>
                <OrderSummary />
            </View>
            
        </View>
    </View>
    
   
</View>
