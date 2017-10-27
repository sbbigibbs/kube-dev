import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import {Button} from "react-native"
import CartItem from "@iherb/ui-component-cart-item"
import ErrorBox from "@iherb/ui-component-error-box"
import { styles } from "./styles/native"

export default ({cartItems, onRefreshCart, basketErrorList, isBasketErrorEmpty}) => {
    let basketErrors;
    let errorStyle = isBasketErrorEmpty ? "basketErrorEmpty" : "basketError"

    return (<View style={styles.flex1}>
        <Button title="Refresh"
                color="#458500" 
                onPress={onRefreshCart}
                />
        {basketErrors = <View style={styles[errorStyle]}>
            {basketErrorList.map(errorMsg => {
                return <ErrorBox isCartError={true} errorMessage={errorMsg} />
            })}
        </View>}
        <View style={styles.border}>
    
        </View>
        
        {
            cartItems.map( cartItem => <CartItem {...cartItem} /> )
        }
    </View>)
}
