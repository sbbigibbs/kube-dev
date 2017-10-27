import React from 'react';
import { render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import { action, Frame } from "@iherb/us-view-cart-three-products"
import { action as decrementAction, Frame as DecrementFrame } from "./user-stories/decrement-cart-item-quantity"
import { action as calculateAction, Frame as CalculateFrame } from "./user-stories/calculate-shipping"
import { action as selectUpsAction, Frame as SelectUpsFrame } from "./user-stories/select-shipping-method-ups"

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
          <Text>{decrementAction.title}</Text>
          {
            decrementAction.description.map(text => <Text>
              {text}
            </Text>)
          }
        </View>
        <View style={styles.frame}>
          <DecrementFrame />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.action}>
          <Text>{calculateAction.title}</Text>
          {
            calculateAction.description.map(text => <Text>
              {text}
            </Text>)
          }
        </View>
        <View style={styles.frame}>
          <CalculateFrame />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.action}>
          <Text>{selectUpsAction.title}</Text>
          {
            selectUpsAction.description.map(text => <Text>
              {text}
            </Text>)
          }
        </View>
        <View style={styles.frame}>
          <SelectUpsFrame />
        </View>
      </View>

    </View>, 
    context.document.currentPage());
}
