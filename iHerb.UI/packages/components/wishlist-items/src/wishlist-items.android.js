import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives'
import { TouchableOpacity } from 'react-native'
import WishlistItem from "@iherb/ui-component-wishlist-item"

export default class WishlistItems extends React.Component {
  render() {
    const {
      prodList,
      folderList,
      onSelectWishlistDropdown,
      folderName
    } = this.props

    return (
      <View>
        <View style={styles.quantity}>
          <TouchableOpacity 
            style={styles.productQty}
            onPress={onSelectWishlistDropdown}>
            <Text style={styles.quantityText}>{folderName}</Text>
            <View style={styles.triangleContainer}>
              <Text style={styles.triangle}></Text> 
            </View>
          </TouchableOpacity>
        </View>
        {prodList.map(product => <WishlistItem {...product} />)}
      </View>
    )
  }
}

const styles = {
  productQty: {
    flexDirection: "row",
    flex: 1
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
  quantity: {
    width: 80,
    height: 28,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#747474",
    borderStyle: "solid",
  }
}