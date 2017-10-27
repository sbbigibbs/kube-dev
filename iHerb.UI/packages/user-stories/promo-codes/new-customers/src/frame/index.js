import React from "react"
import { View, Text } from 'react-primitives';
import CartItems from "./cart-items"
import PromoCode from "./promo"
import {OrderSummary, ShippingEstimates, ShippingMethods} from "@iherb/load-cart-base"

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
    <PromoCode/>
    <ShippingEstimates />
    <ShippingMethods />
    <OrderSummary  />
    
   
</View>