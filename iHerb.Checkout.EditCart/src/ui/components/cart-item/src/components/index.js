import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';

export const PromoElement = ({styles, discountMsgList}) => <View>
  {discountMsgList.map(promo => {
    return <Text style={styles.promo}>{promo}</Text>
  })}
  
</View>

export const Discounts = ({styles, discountsAppliedList}) => <View style={{marginTop: 10}}>
  {discountsAppliedList.map(discount => {
      return <Text style={styles.discounts}>{discount}</Text>
    })}
</View>

export const ProductImage = ({styles, imageSource}) => <Image 
  style={styles.productImg}
  source={{uri: imageSource}} 
  />

export const Weight = ({styles, labels, weight, weightKg}) => {
  const weightLbs = labels.weightLbs.slice(3, labels.weightLbs.length)
  const kgWeight = labels.weightKg.slice(3, labels.weightKg.length)

  return <View style={styles.weight}>
    <Text style={styles.weight}>{labels.weight}: {weight}{weightLbs} </Text>
    <Text style={styles.weight}>({weightKg}{kgWeight})</Text>
  </View>
}

export const ProductTitle = ({styles, title}) => <Text style={styles.productTitle}>{title} </Text>
  
export const ProductPrice = ({styles, total, labels, price}) => <View style={styles.productPrice}>
  <Text style={styles.total}>{total}</Text>
  <Text style={styles.priceEach}>({labels.each} {price})</Text>
</View>