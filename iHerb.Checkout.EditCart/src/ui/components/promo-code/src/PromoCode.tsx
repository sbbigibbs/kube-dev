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
        promoError,
        labels
    } = props
    
    const promoView = couponList.length > 0 ? <View style={styles.couponSection}>
    {couponList.map((coupon,i) => {
        
        return <View style={(i === couponList.length - 1) ? styles.attributeNoBorder : styles.attribute}>
                    <View>
                        <Text style={styles.label}>{coupon.couponCode}</Text>
                        <Text style={styles.description}>{coupon.couponDescription}</Text>
                    </View>
                    <View><Text style={styles.removeItem} onPress={() => onDeleteCouponCode(coupon.couponCode)}>{labels.removeButton}</Text></View>
           
        </View>
    })}  
    </View> : <Text></Text>

    return <View style={styles.root}>
        <Text style={styles.title}>Apply Promo or Rewards Code</Text>
        
        <View style={styles.promoCodes}>
            <View style={styles.actions}>
                {/* <TextInput style={styles.textInput}
                    onChangeText={onChangeCouponCode}
                    placeholder="Enter Code"
                    value={couponCode} /> */}
                    <input style={styles.textInput} type="text" placeholder="Enter Code" onChange={(e) => onChangeCouponCode(e.target.value)} value={couponCode}/>
                <View style={styles.button}>
                    <Text onPress={onApplyCouponCode}>{labels.apply}</Text>
                </View>
               
                
            </View>
            <Text style={styles.error}>{promoError}</Text>
           {promoView}
        </View>
        <Text style={styles.title}>{labels.savings}</Text>
        
                <View style={styles.savingsSection}>
                {discountMsgPriceList.map((discount,i) => {
                        return <View style={(i === discountMsgPriceList.length - 1) ? styles.attributeNoBorder : styles.attribute}>
                            
                            <Text style={styles.label}>{discount.message}</Text>
                            <Text style={styles.savings}>({discount.price})</Text>
                        </View>
                    })}

                    <View style={styles.totalSavingsAttribute}>
                        <Text style={styles.totalSavings}>{labels.savings}</Text>
                        <Text style={styles.totalSavings}>{savings}</Text>
                    </View>
                    
                </View>
                           
        
    </View>
}
