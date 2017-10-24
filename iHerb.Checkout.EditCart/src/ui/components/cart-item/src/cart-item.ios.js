import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import { TouchableOpacity } from "react-native"
import ErrorBox from "@iherb/ui-component-error-box"
import styles from "./styles/native"
import {
  PromoElement,
  Discounts,
  ProductImage,
  Weight,
  ProductTitle,
  ProductPrice
} from "./components"
import { ProductQuantity } from "./native-components"

export default class CartItem extends React.Component {
  render() {
    const {
      labels,
      imageSource,
      title,
      productId,
      weight,
      discountMsgList,
      price,
      quantity,
      discountsAppliedList,
      total,
      onIncrement,
      onDecrement,
      onRequestProductQuantityChange,
      onDeleteProduct,
      onPostToWishlist,
      errorMsgList,
      weightKg
    } = this.props

    
    return (
      <View>
        <View style={styles.lineItem}>
          {errorMsgList.map(error => {
            return <ErrorBox isCartError={false} errorMessage={error} />
          })} 
        </View>
        <View style={styles.root}>
          <View style={styles.image}>
            <ProductImage 
                styles={styles} 
                imageSource={imageSource}
              />
            <Weight
              styles={styles}
              labels={labels}
              weight={weight}
              weightKg={weightKg} 
            />
          </View>
           
          
          <View style={styles.details}>
            <View style={styles.title}>
              <ProductTitle 
                styles={styles}
                title={title}
              />
            </View>
            <View style={styles.pricing}>
              <View style={styles.price}>
                <ProductPrice
                  styles={styles}
                  total={total}
                  labels={labels}
                  price={price} 
                />
              </View>
              <View style={styles.quantity}>
                <ProductQuantity
                  styles={styles}
                  quantity={quantity}
                  onRequestProductQuantityChange={onRequestProductQuantityChange}
                 />
              </View>
            </View>
            <PromoElement
              styles={styles}
              discountMsgList={discountMsgList}
              
            />
            <Discounts
              styles={styles}
              discountsAppliedList={discountsAppliedList} 
            />
            <View style={styles.actions}>
              <Text
                onPress={onPostToWishlist}
                style={styles.postWishList}>{labels.addToList}</Text>
              <Text onPress={onDeleteProduct} style={styles.deleteProduct}>{labels.removeButton}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }  
}