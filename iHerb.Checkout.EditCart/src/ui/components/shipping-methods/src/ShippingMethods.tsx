import React from "react"
import { View, Text, StyleSheet } from 'react-primitives'
import { styles } from './styles/web'
import ShippingMethod from "../../shipping-method/src/ShippingMethod"

export default class ShippingMethods extends React.Component {
  props:any

  render() {
    const {
      shippingMethods,
      tax,
      rewards,
      orderTotal,
      labels,
      showShipping
    } = this.props

    const shippingView = showShipping ? shippingMethods.map(shippingMethodProps  => 
      <View> 
          <ShippingMethod 
              key={shippingMethodProps.shippingMethodId} 
              {...shippingMethodProps} /> 
      </View>
      ) : <Text></Text>
    return (<View style={styles.section}>
        <View>
          {shippingView}
          <View style={styles.attribute}>
              <Text style={styles.label}>{labels.taxColon}</Text>
              <Text style={styles.value}>{tax}</Text>
          </View>
          <View style={styles.attribute}>
              <Text style={[styles.label, styles.rewards]}>{labels.rewardsColon}</Text>
              <Text style={[styles.value, styles.rewards]}>{rewards}</Text>
          </View>
          <View style={styles.attributeNoBorder}>
            <View style={styles.orderTotal}>
              <Text style={styles.orderTotal}>{labels.totalColon}</Text>
            </View>
              <Text style={styles.value}>{orderTotal}</Text>
           
              
          </View>
          
          <View style={styles.checkout}>
            <Text style={styles.text}>{labels.ttlCheckout}</Text>
          </View>
        </View>
        
      </View>)
  }
}