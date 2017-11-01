import React from "react";
import { View, Text, Image, StyleSheet } from 'react-primitives';
//import TextInput from "@iherb/react-primitive-text-input";
import { styles } from "./styles/promo-code"

export default (props) => {
    const {
        couponCode,
        onChangeCouponCode,
        onApplyCouponCode,
        couponList,
        savings,
        onDeleteCouponCode,
        discountMsgPriceList,
        labels
    } = props
    
    return <View style={styles.root}>
        <Text style={styles.savings}>{labels.savings} ({savings})</Text>
        <Text>{labels.applyPromo}</Text>
        <View style={styles.actions}>
            <input type={'text'} style={styles.textInput}
                onChangeText={onChangeCouponCode}
                value={couponCode} />

            <View style={styles.button}>
                <Text onPress={onApplyCouponCode}>{labels.apply}</Text>
            </View>
        </View>
        <View style={styles.root}>
            <Text style={styles.promoTitle}>{labels.promoCode}</Text>
              {couponList.map((coupon, index) => {
                return <View key={index} style={styles.actions}>
                    <Text>{coupon.couponCode} - {coupon.couponDescription}
                        <Text style={styles.removeItem} onPress={() => onDeleteCouponCode(coupon.couponCode)}>{labels.removeButton}</Text>
                    </Text>
                </View>
            })}  
        </View>
        <View style={styles.root}>
            <Text style={styles.promoTitle}>{labels.savings}</Text>
                {discountMsgPriceList.map((discount, index) => {
                    return <View key={index} style={styles.action}>
                        <Text>{discount.message} - {discount.price}</Text>
                        </View>
                })}
        </View>
    </View>
}
