import React from "react"
import { View, Text } from 'react-primitives';
import { styles } from "./styles/native"

export default class OrderSummary extends React.Component {
  render() {
    const {
      subtotal,
      shipping,
      tax,
      rewards,
      orderTotal,
      labels
    } = this.props

    return (
      <View style={styles.orderSummary}>
        <Text style={styles.title}>Order Summary</Text>
        <View style={styles.attribute}>
            <Text style={styles.label}>{labels.subtotalColon}</Text>
            <Text style={styles.value}>{subtotal}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>{labels.shippingColon}</Text>
            <Text style={styles.value}>{shipping}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>{labels.taxColon}</Text>
            <Text style={styles.value}>{tax}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={[styles.label, styles.rewards]}>{labels.rewardsColon}</Text>
            <Text style={[styles.value, styles.rewards]}>{rewards}</Text>
        </View>
        <View style={styles.attribute}>
            <Text style={styles.label}>{labels.totalColon}</Text>
            <Text style={styles.value}>{orderTotal}</Text>
        </View>
        
        <View style={styles.checkout}>
          <Text style={styles.text}>{labels.ttlCheckout}</Text>
        </View>
      </View>
    );
  }
}
