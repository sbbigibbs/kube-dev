import React from "react"
import {lightGreen500, grey200} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

export default props => {
    const {
        goToCart,
        goToWishList,
        goToRecycleBin,
        cartSize,
        wishlistSize,
        toggleActiveTab,
        tabData
    } = props
    
    const toggleActive = (currTab, routeFunc) => {
      toggleActiveTab(currTab.props.value)
      routeFunc()
    }
    return (
      <MuiThemeProvider>
        <div>
          <Tabs style={styles.tabStyles} inkBarStyle={styles.inkBarStyles} tabItemContainerStyle={styles.tabItemContainerStyle}>
            {tabData.map(tab => {
              let tabStyle = styles.notSelected
              if(tab.active) tabStyle = styles.selected
              return <Tab style={tabStyle} onActive={(currTab) => toggleActive(currTab, tab.routeFunc)} label={tab.label} value={tab.value}/>
            })}
          </Tabs>  
        </div>
      </MuiThemeProvider>
    )
}

const styles = {
  tabStyles:{},
  selected: {
    fontFamily: "Lato",
    textTransform: "none",
    backgroundColor: '#f6f5f4',
    color: '#000000',
    fontWeight: 'bold'
  },
  tabsStyles: {
    backgroundColor: '#f6f5f4',
  },
  buttonStyle: {
    backgroundColor: lightGreen500
  },
  inkBarStyles: {
    backgroundColor: '#458500',
    zIndex: 1000,
    width: '26.5%',
    marginLeft: 12
  },
  tabItemContainerStyle: {
    backgroundColor: '#f6f5f4'
  },
  notSelected: {
    color: '#999999',
    fontFamily: "Lato",
    textTransform: "none",
    backgroundColor: '#f6f5f4',
  }
}
