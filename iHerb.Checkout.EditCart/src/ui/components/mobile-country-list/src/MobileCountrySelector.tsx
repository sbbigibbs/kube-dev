import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import FlagSprite from "../../flag-sprite/src/index"
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DropDownMenu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { styles } from "./styles/web"

export default class MobileCountrySelector extends React.Component {
    props: any
    render() {
        const {
            countryCode,
            countryName,
            onUpdateShippingCountry,
            requiresZip
        } = this.props
    
        return <MuiThemeProvider>
        
        <IconMenu
            iconButtonElement={<IconButton><FlagSprite countryCode="us"/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}>
        
        {this.props.countryList.map(country => 
          <MenuItem primaryText={country.name} 
                    value={{cc: country.code, requiresZip: country.requiresZip}}
                    onClick={() => this.props.onUpdateShippingCountry(country.name, country.requiresZip, country.code)}
                    leftIcon={<FlagSprite countryCode={country.code.toLowerCase()}/>}
                    />
          )}
    
    
      </IconMenu>
        
        </MuiThemeProvider>
    }
}
