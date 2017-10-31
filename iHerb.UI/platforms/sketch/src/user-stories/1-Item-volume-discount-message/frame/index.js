import React from "react"
import { View, Text } from 'react-primitives';
import CartItems from "./cart-items"
import ShippingEstimates from "./shipping-estimates"
import PromoCode from "./promo"
import OrderSummary from "./order-summary"
import ShippingMethods from "./shipping-methods"

const styles = {
    page: {
        flexWrap: 'wrap',
        

    },
    cart: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 15,
        paddingRight: 15
    },

    responsiveContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
        

    },
    shipping:{
        minWidth:276 ,
        flex: 3,
        marginRight: 20,
        
    },
    summary: {
        minWidth: 276,
        flex: 1,
        
        
    },
    
    

}

export default () => <View style={styles.page}>
    
    <CartItems /> 
    {/* <View style={styles.responsiveContainer}>
        <View style={styles.shipping}>
            <ShippingEstimates />
            <ShippingMethods />
        </View>
        <View style={styles.summary}>
            <OrderSummary  />
        </View>
    </View> */}
    <PromoCode/>
    <ShippingEstimates />
    <ShippingMethods />
    <OrderSummary  />
    
   
</View>