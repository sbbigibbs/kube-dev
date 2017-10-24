import { StyleSheet } from 'react-primitives'

export const radioStyles = StyleSheet.create({
  enabled: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    backgroundColor: '#4f9900',
   },
  disabled: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
   }
});

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
  cursor: "pointer"
  
  },
  title: {
    color: "#000000",
    fontWeight: "bold"
  
  },
  shippingType: {
    color: 'red',
    fontWeight: 'bold'
  },
  promo: {
  
  },
  image: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 8
  },
  input: {
  
  flexDirection: 'row',
  justifyContent: "space-around",
  alignItems: "center"
  },
  description: {
    flexDirection: "column",
    flex: 4,
    marginLeft: 8
  },
  typePrice:{
    flexDirection: "row",
    flexWrap: "wrap"
    },
  
    deliveryRange: {
  
      color: '#000000'
    }
  
  });
  