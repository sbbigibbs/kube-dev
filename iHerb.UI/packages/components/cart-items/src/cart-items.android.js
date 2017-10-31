import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import {Button} from "react-native"
import CartItem from "@iherb/ui-component-cart-item"
import ErrorBox from "@iherb/ui-component-error-box"
import { styles } from "./styles/native"

export default ({cartItems, onRefreshCart, basketErrorList, isBasketErrorEmpty, onSelectWishlist}) => {
    let basketErrors;
    let errorStyle = isBasketErrorEmpty ? "basketErrorEmpty" : "basketError"

    return (<View style={styles.flex1}>
        <Button title="Refresh"
                color="#458500" 
                onPress={onRefreshCart}
                />
        <Button title="My List"
                color="#458500" 
                onPress={onSelectWishlist}
                />
        {basketErrors = <View style={styles[errorStyle]}>
            {basketErrorList.map(errorMsg => {
                return <ErrorBox isCartError={true} errorMessage={errorMsg} />
            })}
        </View>}
        
        {
            cartItems.map( cartItem => <CartItem {...cartItem} /> )
        }
    </View>)
}
