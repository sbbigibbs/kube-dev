import { StyleSheet } from 'react-primitives';

export const styles = StyleSheet.create({
  orderSummary: {
    height: 330,
    backgroundColor: '#f7f7f7',
    padding: 30,
    flexDirection: "column",
    justifyContent: 'space-between'
  },
  attribute: {
    fontSize: 14,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  orderTotal: {
    fontSize: 18,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    fontWeight: 'bold'
  },
  value: { },
    summaryAction: {
    borderTopWidth: 1,
    borderColor: "#ededed"
  },
  checkout: {
    marginTop: 16,
    padding: 16,
    color: "#fff",
    backgroundColor: "#ff8a00"
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
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