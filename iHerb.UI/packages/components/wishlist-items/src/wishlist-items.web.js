import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives'
import WishlistItem from "@iherb/ui-component-wishlist-item"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class WishlistItems extends React.Component {
  render() {
    const {
      prodList,
      folderNames,
      onSelectWishlistDropdown,
      folderName
    } = this.props

    return (
      <View>
        <View style={styles.quantityContainer}>
          {/* <MuiThemeProvider>
          <DropDownMenu style={dropdownStyles.customStyle} labelStyle={dropdownStyles.customLabel} iconStyle={dropdownStyles.customIcon} underlineStyle={dropdownStyles.customUnderline} menuStyle={dropdownStyles.customMenu} menuItemStyle={dropdownStyles.customMenuItem} selectedMenuItemStyle={dropdownStyles.customSelectedItem} autoWidth={false}>
            {folderNames}
          </DropDownMenu>
          </MuiThemeProvider> */}
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