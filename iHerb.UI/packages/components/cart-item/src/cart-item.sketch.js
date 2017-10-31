import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';


export default class CartItem extends React.Component {
  render() {
    const {
      imageSource,
      title,
      productId,
      weight,
      promo,
      price,
      quantity,
      discount,
      total
    } = this.props

    let promoElement = <Text></Text>
    let discountMessage = <Text></Text>
    if(promo.length > 0) 
      promoElement = <Text style={styles.promo}>{promo[0]}</Text>
    if(discount.length > 0)
      discountMessage = <View style={styles.discountContainer}><Text style={styles.discount}>Discount(s):</Text>
        {discount.map(message => {
          return <Text style={styles.discount}>{'  \u2022'} {message}</Text>
        })}
    </View>
    

      
    const ProductImage = () => <Image 
      style={{
        width: 60,
        height: 60
      }}
      source={{uri: imageSource}} />

    const Weight = () => <View style={{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    }}>
      <Text style={styles.productWeight}>Weight:</Text>
      <Text style={styles.productWeight}>{weight} lbs</Text>
      
    </View>

    
    const ProductPrice = () => <View style={{
      flexDirection: "column"
      
    }}>
      <Text style={styles.productTotal}>{total}</Text>
      <Text style={styles.productPrice}>({price} Each)</Text>
      
      
    </View>

    const ProductQuantity = () => <View style={{
      flexDirection: "row",
      flex: 1
    }}>
      
        <Text style={styles.quantityText}>{quantity}</Text>
        <View style={styles.triangleContainer}>
          <Text style={styles.triangle}></Text> 
        </View>
        
      
    </View>
    const ProductDiscount = ({discount}) => discount  
      ? <View style={styles.discount}>
        <Text>{promo.get(0)}</Text> 
      </View>
      : <Text></Text>
    const MoveToWishList = () => <Text style={{
      color: "#1976d2",
      textDecorationLine: "underline",
      marginRight: 10
    }}>Move to Wish List</Text>
    const Remove = () => <Text style={{
      color: "#1976d2",
      textDecorationLine: "underline"
    }}>Remove</Text>

    return (
      <View style={styles.root}>
        <View style={styles.image}>
          <ProductImage />
          <Weight />
        </View>
        <View style={styles.details}>
            <Text>{title}</Text>
            
          <View style={styles.pricing}>
            <View style={styles.price}><ProductPrice /></View>
            <View style={styles.quantity}><ProductQuantity /></View>
          </View>
          {promoElement}
          {discountMessage}
      
          <View style={styles.actions}>
            <Text
              style={{
              color: "#1976d2",
              textDecorationLine: "underline",
              marginRight: 10
            }}>Move to Wish List</Text>
            <Text style={{
              color: "#1976d2",
              textDecorationLine: "underline"
            }}>Remove
            </Text>
          </View>
        </View>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  root: {
    marginTop: 8,
    flexDirection: "row",
    borderColor: "#ededed",
    borderBottomWidth: 1,
    borderStyle: "solid",
    fontSize: 10,
    
    paddingTop: 15,
    paddingBottom: 15
  },

  image: {
    flexDirection: "column",
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  productTotal: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold"
  },
  productPrice: {
    fontSize: 12,
    color: "#747474"
    
  },
  discountContainer: {
    marginTop: 10,
  },
  discount: {
    fontSize: 12,
    color: '#458500'
  },
  productWeight: {
    fontSize: 10,
    color: "#747474"
  },
  
  title: {
    flex: 1
  },
  details: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between"
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
    marginTop: 10,
    maxWidth: 350
  },
  promoContainer: {
    fex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
    
  },
  pricing: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 10
  },
  price: {
    flex: 1
  },
  total: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold"
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
  }
});
