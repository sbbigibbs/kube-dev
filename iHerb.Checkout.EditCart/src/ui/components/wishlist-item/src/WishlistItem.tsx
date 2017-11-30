import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives'

export default class WishlistItem extends React.Component {
  props: any
  
  render() {
    const {
      rating,
      price,
      image,
      isAvailable,
      prodName,
      ratingCount
    } = this.props

    return (
      <View>
        <View style={styles.root}>
          <View style={styles.image}>
            <Image 
              style={styles.productImg}
              source={{uri: image}} 
            />
            {/* <View style={styles.weight}>
              <Text style={styles.weight}>{labels.weight}: {weight}{weightLbs} </Text>
              <Text style={styles.weight}>({weightKg}{kgWeight})</Text>
            </View> */}
          </View>
          <View style={styles.details}>
            <View style={styles.title}>
              <Text style={styles.productTitle}>{prodName} </Text>
            </View>
            <View>
              <Text>{ratingCount} reviews</Text>
            </View>
            <View style={styles.pricing}>
              <View style={styles.price}>
                <View style={styles.productPrice}>
                  <Text style={styles.total}>{price}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderColor: "#ededed",
    borderBottomWidth: 1,
    borderStyle: "solid",
    fontSize: 10,
    padding: 8
  },
  image: {
    flexDirection: "column",
    flex: 1
  },
  
  title: {
    flex: 1
  },
  details: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 40
  },
  promo: {
    backgroundColor: '#e3edd9',
    color: '#458500',
    borderWidth: 1,
    borderColor: '#458500',
    borderStyle: 'solid',
    marginTop: 10,
    fontSize: 13,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'flex-start'
  },
  discounts: {
    color: '#7bb32e',
    fontSize: 12
  },
  pricing: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  price: {
    flex: 1
  },
  priceEach: {
    color: '#747474',
    fontSize: 12
  },
  total: {
    fontSize: 16,
    color: '#50921c',
    fontWeight: 'bold'
  },
  quantity: {
    width: 50,
    height: 28,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#747474",
    borderStyle: "solid",
    
  },
  actions: {
    flexDirection: "row",
    marginTop: 10
  },
  quantityText: {
    flex: 2,
    textAlign: "center",
    alignSelf: "center"
    
  },
  triangleContainer: {
    backgroundColor: "#808080",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffff',
    transform: [
      {rotate: '180deg'}
    ]
  },
  lineItem: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15
  },
  weight: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10,
    color: '#747474'
  },
  productTitle: {
    fontSize: 12,
    color: '#000000'
  },
  productPrice: {
    flexDirection: "column"
  },
  productQty: {
    flexDirection: "row",
    flex: 1
  },
  productImg: {
    width: 60,
    height: 60
  },
  postWishList: {
    color: "#1976d2",
    textDecorationLine: "underline",
    marginRight: 10 
  },
  deleteProduct: {
    color: "#1976d2",
    textDecorationLine: "underline"
  }
  
});