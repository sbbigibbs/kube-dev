import React from "react"
import { View, Text, StyleSheet } from 'react-primitives';
import CartItem from "@iherb/ui-component-cart-item"

const cartItems = [
    {
        title: "Great Lakes Gelatin Co., Collagen Hydrolysate, Collagen Joint Care, Beef, 16 oz (454 g)",
        productId: "52774",
        imageSource: "https://www.images-iherb.com/m/GLK-00212-12.jpg",
        weight: "1.42 lbs",
        promo: [
            "This is a promo"
        ],
        price: "$22.99",
        quantity: "19",
        discount: "0",
        total: "$436.81"
    },
    {
        title: "Oh Yeah!, Nutritional Shake, Strawberries & Creme, 14 fl oz (414 ml)",
        productId: "65756",
        imageSource: "https://www.images-iherb.com/m/OYH-11444-1.jpg",
        weight: "1.18 lbs",
        promo: [
            "This is a promo"
        ],
        price: "$3.20",
        quantity: "4",
        discount: "0",
        total: "$12.80"
    },
    {
        title: "T.RQ, Multi Vitamins, Adult Gummy, Cherry Lemon Orange, 60 Gummies",
        productId: "64575",
        imageSource: "https://www.images-iherb.com/m/QRT-00179-3.jpg",
        weight: "0.77 lbs",
        promo: [
            "This is a promo"
        ],
        price: "$9.66",
        quantity: "7",
        discount: "5",
        total: "$64.24"
    },
    {
        title: "T.RQ, Multi Vitamins, Adult Gummy, Cherry Lemon Orange, 60 Gummiessdfdsf",
        productId: "64575",
        imageSource: "https://www.images-iherb.com/m/QRT-00179-3.jpg",
        weight: "0.77 lbs",
        promo: [
            "This is a promo"
        ],
        price: "$9.66",
        quantity: "7",
        discount: "5",
        total: "$64.24"
    }
]

export default () =>  <View>
    <CartItem {...cartItems[0]} />
    <CartItem {...cartItems[1]} />
    <CartItem {...cartItems[2]} />
    <CartItem {...cartItems[3]} />
</View>