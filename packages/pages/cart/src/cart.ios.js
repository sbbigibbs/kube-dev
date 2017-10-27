import React from "react"
import { View, Text } from 'react-primitives';
import OrderSummary from "@iherb/ui-container-order-summary"
import ShippingMethods from "@iherb/ui-container-iherb-ui-component-shipping-methods"
import CartItems from "@iherb/ui-container-cart-items"
import ShippingEstimates from "@iherb/ui-container-shipping-estimates"
import PromoCode from "@iherb/ui-container-promo-code"

const styles = {
    page: {
        marginLeft: 16
    }
    
    
}

export default () => <View style={styles.cart}>
   <CartItems />
    <PromoCode />
    <ShippingEstimates />
    <ShippingMethods />
     <OrderSummary />
</View>
