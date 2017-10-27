import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import RadioInput from '@iherb/ui-component-radio-input';
import ShippingMethod from "@iherb/ui-component-shipping-method"

const props = [
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Grd.gif",
        title: "Expedited",
        shippingType: "FREE!",
        enabled: false,
        promos: [],
        deliveryRange: "September 19,2017 - September 20, 2017",
        shippingDesc: [
            "Free shipping for orders over $20.00!",
            "No Po Box or APO"
        ] 
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
        title: "Two Day",
        shippingType: "FREE!",
        enabled: false,
        promos: [],
        deliveryRange: "September 20,2017",
        shippingDesc: [
            "No Po Box or APO"
        ] 
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
        title: "Next Day",
        shippingType: "$6.00",
        enabled: false,
        promos: [],
        deliveryRange: "September 19,2017 - September 20, 2017",
        shippingDesc: [
            "No Po Box or APO"
        ] 
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/USPS-Pri.gif",
        title: "PO BOX or APO Address",
        shippingType: "FREE!",
        enabled: true,
        promos: [],
        deliveryRange: "September 20,2017 - October 16, 2017",
        shippingDesc: [
            "Free shipping for orders over $20.00!",
            "Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks"
        ] 
    }
]

export default () =>  <View>
<ShippingMethod {...props[0]} />
<ShippingMethod {...props[1]} />
<ShippingMethod {...props[2]} />
<ShippingMethod {...props[3]} />
</View>