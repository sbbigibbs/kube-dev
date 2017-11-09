import { StyleSheet } from 'react-primitives'

export const styles = StyleSheet.create({
  section: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  attribute: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#dfdfdf',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 10
  },
  attributeNoBorder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10
},
  label:{
    fontSize: 14,
    color: '#000000'
  },
  orderTotal: {
    fontWeight: 'bold',
    fontSize: 16
  },
    value: { 
      color: "#000000",
      fontWeight: "bold"
    },
  checkout: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    color: "#fff",
    backgroundColor: "#ff8a00"
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: "#ffffff"
    
  }  
});
  