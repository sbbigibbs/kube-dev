import React from "react";
import { View, Text, Image, StyleSheet } from 'react-primitives';
import TextInput from "@iherb/react-primitive-text-input";

const styles = {
    root: {
        flexDirection: "column",
        paddingTop: 15,
        color: "#000000"
    },
    titleRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    title: {
        flex: 1,
        fontSize: 16,
        color: "#000000",
        fontWeight: "bold"
    },
    carrot: {
        width: 17,
        height: 10,
        flex: 1,
        color: '#747474',
        textAlign: 'right'
    },
    actions: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "space-between",
        marginTop: 10,
        maxWidth: 320
    },
    button: {
        flex: 1,
        backgroundColor: "#ededed",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        cursor: "pointer",
        height: 32
    },
    textInput: {
        width: 200,
        height: 32,
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 5
    },
    savings: {
        color: "green"
    },
    removeItem: {
        color: "#1976d2",
        textDecorationLine: "underline",
        cursor: "pointer"
        
    },
    savingsRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "space-between"
    },
    coupon: {
        color: '#458500',
        fontWeight: 'bold'
    }
}

export default (props) => {
    const {
        couponCode,
        onChangeCouponCode,
        onApplyCouponCode,
        couponList,
        savings,
        onDeleteCouponCode,
        discountMsgPriceList
    } = props
    return <View style={styles.root}>
        <View style={styles.titleRow}>
            <Text style={styles.title}>Savings</Text>
            <Text style={styles.carrot}>{'\u25BC'}</Text>
        </View>
        
        <Text>Please enter a promo code</Text>
        <View style={styles.actions}>
            <Text style={styles.textInput}>Promo Code</Text>
            <Text style={styles.button}>Apply</Text>
            
        </View>
        <View style={styles.root}>
            <Text style={styles.promoTitle}>Promo Code</Text>
              {couponList.map(coupon => {
                return <View style={styles.savingsRow}>
                    
                        <Text style={styles.coupon}>{coupon.couponCode} - {coupon.couponDescription}</Text>
                        <Text style={styles.removeItem} onPress={() => onDeleteCouponCode(coupon.couponCode)}>  Remove</Text>
                    
                </View>
            })}  
        </View>
        {/* <Text style={styles.savings}>Total Savings: ({savings})</Text> */}
    </View>
}
