import React from 'react';
import { render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import { action, Frame } from "@iherb/us-view-cart-three-products"
import { action as incrementAction, Frame as IncrementFrame } from "./user-stories/increment-cart-item-quantity"
import { action as deleteAction, Frame as DeleteFrame } from "./user-stories/delete-cart-item"
const styles = {
  row: {
    width: 1000,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  action: {
    width: 300
  },
  frame: {

  },
  title: {
    fontSize: 32
  }
}

export default (context) => {
  render(
    <View>
      <View>
        <Text style={styles.title}>
          User Story: Scenario
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.action}>
          <Text>{action.title}</Text>
          {
            action.description.map(text => <Text>
              {text}
            </Text>)
          }
        </View>
        <View style={styles.frame}>
          <Frame />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.action}>
          <Text>{incrementAction.title}</Text>
          {
            incrementAction.description.map(text => <Text>
              {text}
            </Text>)
          }
        </View>
        <View style={styles.frame}>
          <IncrementFrame />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.action}>
          <Text>{deleteAction.title}</Text>
          {
            deleteAction.description.map(text => <Text>
              {text}
            </Text>)
          }
        </View>
        <View style={styles.frame}>
          <DeleteFrame />
        </View>
      </View>
    </View>, 
    context.document.currentPage());
}
