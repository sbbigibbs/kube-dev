import { StyleSheet } from 'react-primitives'

export const styles = StyleSheet.create({
  shippingMethod: {

  borderRadius: 10,
  borderColor: '#ddd',
  borderStyle: 'solid',
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: 12,

  marginBottom: 10,
  marginLeft: 15,
  marginRight: 15
  },
  title: {
    color: "#000000",
    fontWeight: "bold"

  },
  shippingType: {
    color: '#458500',
    fontWeight: 'bold'
  },
  promo: {

  },
  image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  input: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: "space-around",
  alignItems: "center"
  },
  description: {
    flexDirection: "column",
    flex: 4
  },
  typePrice:{
    flexDirection: "row",
    flexWrap: "wrap"
    },
    
    deliveryRange: {
      
      color: '#000000'
    }

});