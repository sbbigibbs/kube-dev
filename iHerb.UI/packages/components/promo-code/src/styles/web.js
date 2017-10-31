export const styles = {
  root: {
      flexDirection: "column",
      paddingTop: 15,
      paddingBottom: 15,
      color: "#000000"
  },
  title: {
      color: "#000000",
      fontWeight: "bold"
  },
  actions: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "space-between",
      marginTop: 10,
      maxWidth: 320
  },
  button: {
      flex: 1,
      backgroundColor: "#ededed",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10,
      cursor: "pointer"
  },
  textInput: {
      width: 200,
      height: 32,
      borderWidth: 1,
      borderColor: "#cccccc",
      padding: 5
  },
  savings: {
      color: "green"
  },
  removeItem: {
      color: "#1976d2",
      textDecorationLine: "underline",
      cursor: "pointer",
      marginTop: 10
  },
  promoTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "green"
  }
}