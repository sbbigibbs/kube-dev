import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';
const OrderTotals = require(`@iherb/ui-translations-cart/files/cart.${process.env.LANG_CODE}.json`)

const styles = StyleSheet.create({
    orderSummary: {
        height: 320,
        backgroundColor: '#f7f7f7',
        padding: 15,
        
        flexDirection: "column",
        justifyContent: 'space-between',
        flex: 1
    },
    attribute: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      
    },
    label: {
      fontWeight: 'bold',
      color: "#000000"
    },
    value: { 
      color: "#000000",
      fontWeight: "bold"
    },
    checkout: {
      marginTop: 16,
      padding: 16,
      color: "#fff",
      backgroundColor: "#ff8a00"
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
      color: "#ffffff"
      
    },
    hr:{
      borderColor: "#ededed",
      borderBottomWidth: 1,
      borderStyle: "solid"
    },
    rewards: {
      color: "#50921c"
    }
  });

export default () => {
    const subtotal = "$4.95"
    const shipping = "$5.68"
    const tax = "$0.00"
    const rewards = "$0.00"
    const orderTotal = "$10.63"
    
    return (
        <View style={styles.orderSummary}>
        <View style={styles.attribute}>
            <Text style={styles.label}>{OrderTotals.totals.subtotal}</Text>
            <Text style={styles.value}>{subtotal}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>{OrderTotals.totals.shipping}</Text>
            <Text style={styles.value}>{shipping}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>{OrderTotals.totals.tax}</Text>
            <Text style={styles.value}>{tax}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={[styles.label, styles.rewards]}>{OrderTotals.totals.rewards}</Text>
            <Text style={[styles.value, styles.rewards]}>{rewards}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>{OrderTotals.totals.order}</Text>
            <Text style={styles.value}>{orderTotal}</Text>
        </View>
        <Text style={styles.hr}></Text>
        <View style={styles.checkout}>
            <Text style={styles.text}>Checkout</Text>
        </View>
        </View>
    );
}
