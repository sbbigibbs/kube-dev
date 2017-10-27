import React from "react";
import { View, Text, Image, StyleSheet } from 'react-primitives';
import TextInput from "@iherb/react-primitive-text-input";
import { Button } from 'react-native'
import styles from './styles/native'

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

    return <View style={styles.root}>
        <View style={styles.section}>
            <Text style={styles.title}>{labels.promoCode}</Text>
            <View style={{backgroundColor: '#ffffff'}}>
                <View style={styles.actions}>
                    <View style={styles.textInput}>
                        <TextInput 
                            onChangeText={onChangeCouponCode}
                            value={onApplyCouponCode} />
                    </View>
                    
                    <View style={styles.button}>
                    <Button 
                            title={labels.apply}
                            color="#A9A9A9" 
                            onPress={onApplyCouponCode}/>
                    </View>
                        
                </View>
                <View style={styles.promoCodes}>
                    {couponList.map(coupon => {
                        return <View style={{flexDirection: 'row'}}>
                            <Text style={styles.savings}>{coupon.couponCode}</Text> 
                            <Text style={{color: '#000000', fontSize: 12}}> - {coupon.couponDescription}</Text>
                            <Text style={styles.removeItem} onPress={() => onDeleteCouponCode(coupon.couponCode)}>{labels.removeButton}</Text>
                            
                        </View>
                    })}  
                    <Text style={styles.action}>{promoError}</Text>
                </View>
            </View>
           
        </View>
        
        <View style={styles.section}>
                <Text style={styles.title}>{labels.savings}</Text>
                <View>
                    {discountMsgPriceList.map(discount => {
                        return <View style={styles.savingsRow}>
                                    <Text style={{color: '#000000', fontSize: 12}}>{discount.message}</Text>
                                    <Text style={{color: '#000000', fontSize: 12}}>{discount.price}</Text>
                            
                        </View>
                            
                    })}
                    <View style={styles.savingsRow}>
                        <Text style={styles.savings}>{labels.savings}:</Text>
                        <Text style={styles.savings}>{savings}</Text>
                    </View>
                   
                </View>
                
              
        </View>
       
    </View>
}