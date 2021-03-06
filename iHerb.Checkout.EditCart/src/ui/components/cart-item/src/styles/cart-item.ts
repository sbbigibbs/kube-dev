import { StyleSheet } from 'react-primitives';

export const dropdownStyles = {
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

export const styles = StyleSheet.create({
  root: {
    
    borderColor: '#ededed',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    padding: 12
  },
    lineItem: {
      flexDirection: 'row',
      
      paddingBottom: 15,
      paddingTop: 15,
      
    },
    cartItem: {
      flex: 1,
      padding: 15,
      borderBottomWidth: 2,
      borderColor: "#ededed",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: 'nowrap',
      fontSize: 14
    },
    image: {
      flexDirection: "column",
      flex: 1,
      fontSize: 9
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
    decrement: {
      borderRadius: 1,
      borderWidth: 2,
      borderColor: "#000000",
      padding: 8,
      backgroundColor: "#ccc",
      width: 16,
      height: 16,
      textAlign: "center"
    },
    increment: {
      borderRadius: 1,
      borderWidth: 2,
      borderColor: "#000000",
      padding: 8,
      backgroundColor: "#ccc",
      width: 16,
      height: 16,
      textAlign: "center"
    },
    remove: {
      borderRadius: 1,
      borderWidth: 2,
      borderColor: "#000000",
      padding: 8
    },
    action: {
      flexDirection: "row"
    },
    description: {
    flex: 3,
    minWidth: 240
    },
    prodInfo: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap"
  
    },
    price: {
      flex: 1,
      fontWeight: 'bold'
    },
    quantityContainer: {
      flex: 1,
      alignItems: "flex-start"
    },
    quantity: {
      alignSelf: "flex-end",
      paddingLeft: 5,
      paddingRight: 5
    },
    discount: {
      flex: 1,
      color: "#458500"
    },
    total: {
      fontSize: 16,
      color: '#000000',
      fontWeight: '700',
      fontFamily: 'Lato',
      textAlign: 'right'
    },
    each: {
      fontSize: 9,
      fontFamily: 'Lato',
      color: '#747474',
      textAlign: 'right',
      fontWeight: 'bold'
    },
    removeItem: {
      color: "#1976d2",
      textDecorationLine: "underline",
      cursor: "pointer",
      marginTop: 10
    },
    details: {
      flex: 3,
      flexDirection: "column",
      justifyContent: "space-between",
      
    },
    pricing: {
      flexDirection: "row",
      
    },
    actions: {
      flexDirection: "row",
      marginTop: 10
    },
    productImage: {
      width: 75,
      height: 75,
      marginBottom: 10
      
    },
    weightContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20
      
    },
    weight: {
      color: '#999999',
      fontSize: 9,
      fontFamily: 'Lato'
    },
    productTitle: {
      fontSize: 14,
      color: "#000000",
      fontFamily: 'Lato',
      marginRight: 50
    },
    productPrice: {
      flexDirection: "column",
      
    },
    addToList: {
      color: "#1976d2",
      textDecorationLine: "underline",
      marginRight: 10
    },
    deleteProduct: {
      color: "#1976d2",
      textDecorationLine: "underline"
    },
    title: {
      flex: 1,
      fontFamily: 'Lato',
      marginTop: 12,
      marginBottom: 12
    },
    discontinued: {
      color: 'red'
    }
  });
