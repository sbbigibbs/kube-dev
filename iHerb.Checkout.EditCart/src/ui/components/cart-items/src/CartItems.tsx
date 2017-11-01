import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import CartItem from "../../cart-item/src/index"
import ErrorBox from "../../error-box/src/index"
import { styles } from "./styles/cart-items"

export default class CartItems extends React.Component { 
    props: any

    render() {
        let basketErrors;
        let errorStyle = this.props.isBasketErrorEmpty ? "basketErrorEmpty" : "basketError"

        return <View style={styles.flex1}>
            {basketErrors = <View style={styles[errorStyle]}>
                {this.props.basketErrorList.map((errorMsg, index) => {
                    return <ErrorBox key={index} isCartError={true} errorMessage={errorMsg} />
                })}
            </View>}
            <View style={styles.border}>
        
            </View>
            
            {
                this.props.cartItems.map( (cartItem, index) => <CartItem.Component key={index} {...cartItem} /> )
            }
        </View>
    }
}
