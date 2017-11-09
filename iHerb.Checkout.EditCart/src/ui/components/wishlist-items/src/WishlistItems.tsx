import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives'
import WishlistItem from "../../wishlist-item/src/WishlistItem"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';

export default class WishlistItems extends React.Component {
    props: any

  render() {
    const {
      prodList,
      folderNames,
      onSelectWishlist,
      folderName
    } = this.props

    return (
      <View>
        <View style={styles.quantityContainer}>
          {/* <MuiThemeProvider>
          <DropDownMenu 
                        value={folderName}
                        onChange={(event, index, selectedList) => onSelectWishlist(selectedList)}>
            {folderNames.map(folder => {
              return <MenuItem value={folder} primaryText={folder} />
            })}
          </DropDownMenu>
          </MuiThemeProvider>  */}
        </View>
        {prodList.map(product => <WishlistItem {...product} />)}
      </View>
    )
  }
}

const styles = {
  quantityContainer: {
    flex: 1,
    alignItems: "flex-start"
  }
}

const dropdownStyles = {
  customStyle: {
    borderColor: '#808080'
  },
  customLabel: {
    lineHeight: 1,
    paddingLeft: 0,
    borderRightWidth: 1,
    borderColor: '#808080',
    borderStyle: 'solid'
  }
}