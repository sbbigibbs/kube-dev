import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import {TouchableOpacity} from "react-native"

export default class WishlistBox extends React.Component {
  render() {
    const {
      folderNames,
      onSelectWishlist
    } = this.props

    return (
      <View>
        {folderNames.map(folderName => {
          return <TouchableOpacity
                  onPress={() => onSelectWishlist(folderName)}>
            <View style={styles.itemContainer}>
              <Text>
                {folderName}
              </Text>
            </View>
          </TouchableOpacity>
        })}
      </View>
    )
  }
}

const styles = {
  itemContainer:{
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: "#4488a7"
  }
}