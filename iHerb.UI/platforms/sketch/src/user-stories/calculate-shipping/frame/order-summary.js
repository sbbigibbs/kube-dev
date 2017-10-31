import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';

const styles = StyleSheet.create({
  orderSummary: {
      height: 320,
      backgroundColor: '#f7f7f7',
      padding: 15,
      marginLeft: 15,
      marginRight: 15,
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
    const subtotal = "$444.48"
    const shipping = ""
    const tax = "$0.00"
    const rewards = "$0.00"
    const orderTotal = "$444.48"

    return (
        <View style={styles.orderSummary}>
        <View style={styles.attribute}>
            <Text style={styles.label}>Subtotal:</Text>
            <Text style={styles.value}>{subtotal}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>Shipping:</Text>
            <Text style={styles.value}>{shipping}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>Tax:</Text>
            <Text style={styles.value}>{tax}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={[styles.label, styles.rewards]}>Rewards:</Text>
            <Text style={[styles.value, styles.rewards]}>{rewards}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>Order Total:</Text>
            <Text style={styles.value}>{orderTotal}</Text>
        </View>
        <Text style={styles.hr}></Text>
        <View style={styles.checkout}>
            <Text style={styles.text}>Checkout</Text>
        </View>
        </View>
    );
}
