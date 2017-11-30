import React from "react"
import { View } from 'react-primitives';
import { connectAdvanced } from "react-redux"
import { createSelector } from "reselect"
import { root } from "iherb-selectors"
import { workflowCart } from "iherb-redux"
import * as toJS from "immutable"
import languages from "./languages"

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


import DropDownMenu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { ShippingCountrySelector, MobileCountrySelector } from "iherb-components"


const dropdownStyles = {
    customStyle: {
      borderColor: '#808080'
    },
    customLabel: {
      lineHeight: 1,
      paddingLeft: 0,
      
    },
    customIconStyle: {
      top: -17
    },
    menuStyle: {
      paddingLeft: 0
    },
    customSelectedMenuItemStyle: {
      color: '#458500'
      
    },
    dropdownDisplay: {
      width: 30,
      paddingRight: 30
    }
  };

export const selectorFactory = dispatch => createSelector([ root.workflowCart ], (...args) => {
    const [
        workflowCart
    ] = args

    const countryList = workflowCart.get("countryList").slice(0, 31)
    console.log('countryList inside countryList container')
    const zipCode = workflowCart.get("zipcode")
    const onUpdateShippingCountry = (country, requiresZip, countryCode) => {
        dispatch(workflowCart.actions.updateShippingCountry(country, requiresZip, countryCode))
        if(!requiresZip) dispatch(workflowCart.actions.getShippingMethods(zipCode, countryCode))
    }
    return {
        countryList,
        onUpdateShippingCountry
    }
})

export default connectAdvanced(selectorFactory)(props => <View>
    {props.countryList.map(country =>
        <ShippingCountrySelector
            countryCode={country.code}
            countryName={country.name} 
            requiresZip={country.requiresZip}
            onUpdateShippingCountry={props.onUpdateShippingCountry} />
    )}
    
</View>)

export const MobileWebCountryList = connectAdvanced(selectorFactory)(props => 
    <View>
        {props.countryList.map(country =>
        <MobileCountrySelector
            countryCode={country.code}
            countryName={country.name} 
            requiresZip={country.requiresZip}
            onUpdateShippingCountry={props.onUpdateShippingCountry} />
     )}
    </View>
   
)
