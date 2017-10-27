import { StyleSheet } from 'react-primitives';

export const styles = StyleSheet.create({
  orderSummary: {
      
      flexDirection: "column",
      justifyContent: 'space-between',
      flex: 1
  },
  title: {
    backgroundColor: '#f7f7f7',
    color: "#000000",
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 14
},
  attribute: {
    padding: 10,
    borderColor: "#ededed",
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: 'row',
    color: '#000000',
    justifyContent: 'space-between',
    fontSize: 12
    
  },
  label: {
    fontWeight: 'bold',
    color: "#000000"
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
    
  },
  hr:{
    borderColor: "#ededed",
    borderBottomWidth: 1,
    borderStyle: "solid"
  },
  rewards: {
    color: "#50921c"
  }
});