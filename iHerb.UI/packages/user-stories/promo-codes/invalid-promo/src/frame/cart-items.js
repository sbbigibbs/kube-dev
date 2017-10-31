import React from "react"
import { View, Text, StyleSheet } from 'react-primitives';
import CartItem from "@iherb/ui-component-cart-item"

const cartItems = [
    {
        title: "iHerb Goods, Blender Bottle with Blender Ball, Green, 28 ozzzzzzz",
        productId: "IHB-01886",
        imageSource: "https://www.images-iherb.com/m/IHB-01886-4.jpg",
        weight: "0.89 lbs",
        promo: [
            "Buy 3 more and save an extra 5%"
        ],
        price: "$4.95",
        quantity: "1",
        discount: [
            

        ],
        total: "$4.95"
    }
    
]

export default () =>  <View>
    <CartItem {...cartItems[0]} />
</View>