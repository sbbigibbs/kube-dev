import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import RadioInput from '@iherb/ui-component-radio-input';
import ShippingMethod from "@iherb/ui-component-shipping-method"

const props = {
    imageSource: "https://s.images-iherb.com/i/ss/UPS-Grd.gif",
    title: "Title",
    shippingType: "1234",
    enabled: true,
    promos: [],
    deliveryRange: "delivery range",
    shippingDesc: [
        "description 1",
        "description 2",
        "description 3",
        "description 4",
    ] 
}

export default () => <ShippingMethod {...props} />