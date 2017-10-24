import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import { TouchableOpacity } from "react-native"

export const ProductQuantity = ({styles, quantity, onRequestProductQuantityChange}) => <TouchableOpacity 
  style={styles.productQty}
  onPress={onRequestProductQuantityChange}>
  <Text style={styles.quantityText}>{quantity}</Text>
  <View style={styles.triangleContainer}>
    <Text style={styles.triangle}></Text> 
  </View>
</TouchableOpacity>