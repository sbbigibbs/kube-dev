import { StyleSheet } from 'react-primitives';

export const styles = StyleSheet.create({
  product: {
      flex: 2
  },

  flex1: {
      flex: 1
  },

  total: {
      flex:1,
      textAlign: "right"
  },

  lineItemHeader: {
      width: "100%",
      padding: 15,
      borderBottomWidth: 2,
      borderColor: "#ededed",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: 'nowrap'
  },
  basketError: {
      flex: 1
  },
  basketErrorEmpty: {
      flex: 1
  },
  border: {
      borderBottomWidth: 1,
      borderColor: '#ededed',
      borderStyle: 'solid',
      marginTop: 15
  }
})