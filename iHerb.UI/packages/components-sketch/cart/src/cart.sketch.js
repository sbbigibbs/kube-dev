import React from "react"
import {render} from "react-dom"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import CartItem from "@iherb/ui-component-cart-item"

const styles = {
    orderSummary: { },
    shippingMethods: {
        paddingBottom: 8
    },
    shippingMethod: {
        marginTop: 8,
    },
    container: {
        width: 400
    },
    cart: {
    }
}

const shippingMethodProps = [
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Grd.gif",
        title: "Estimated Delivery: August 15 - August 16",
        shippingType: "Expedited - $0.00 FREE!",
        promos: [
            "Free shipping for orders over $20.00!",
            "No Po Box or APO"
        ]
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/USPS-Pri.gif",
        title: "Estimated Delivery: August 15 - August 21",
        shippingType: "PO BOX or APO Address - $0.00 FREE!",
        promos: [
            "Free shipping for orders over $20.00!",
            "Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks"
        ]
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
        title: "Estimated Delivery: August 15",
        shippingType: "Two Day - $10.27",
    },
    {
        imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
        title: "Estimated Delivery: August 14",
        shippingType: "Next Day - $13.28",
    },
]

const orderSummaryProps = {
    subtotal: "$11.99",
    shipping: "$1.99",
    tax: "$0.89",
    rewards: "",
    orderTotal: "$14.87"
}

const cartItemProps = {
    imageSource: "https://www.images-iherb.com/l/CEN-22263-5.jpg",    
    title: "21st Centry, Cal Mag Zinc + D3, 90 Tablets",
    productId: "CEN-22263",
    weight: "0.41lbs",
    promo: "Buy 3 more and save an extra 5%",
    price: "$2.99",
    quantity: 1,
    discount: "1",
    total: "$2.99"
}
const Cart = () => <View style={styles.cart}>
    <View style={styles.shippingMethods}>
        <CartItem {...cartItemProps} />
    </View>
    {/*
    <View style={styles.shippingMethods}>
        <ShippingMethod {...shippingMethodProps[0]} />
        <ShippingMethod {...shippingMethodProps[1]} />
        <ShippingMethod {...shippingMethodProps[2]} />
        <ShippingMethod {...shippingMethodProps[3]} />
    </View>
    <View style={styles.orderSummary}>
        <OrderSummary {...orderSummaryProps} />
    </View>
    */}
</View>

export default () => <View style={styles.container}>
    <Cart />
</View>
