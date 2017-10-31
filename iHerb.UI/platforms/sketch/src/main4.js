import React from 'react';
import { render } from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import { action, Frame } from "@iherb/us-view-cart-three-products"
import { action as decrementAction, Frame as DecrementFrame } from "./user-stories/decrement-cart-item-quantity"
import { action as calculateAction, Frame as CalculateFrame } from "./user-stories/calculate-shipping"
import { action as selectUspsAction, Frame as SelectUspsFrame } from "./user-stories/select-shipping-method-usps"
import { action as incrementAction, Frame as IncrementFrame } from "./user-stories/increment-cart-item-quantity"

const styles = {
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  desktopRow: {
    width: 1400
  },
  tabletRow: {
    width: 768
  },
  MobileRow: {
    width: 320
  },
  action: {
    width: 300
  },
  actionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16
  },
  frame: {},
  title: {
    fontSize: 32,
    marginBottom: 16
  }
}

export default (context) => {
  render(
    <View>
      <View>
        <Text style={styles.title}>
          Change Shipping Method: USPS
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.action}>
          <Text style={styles.actionTitle}>{action.title}</Text>
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
          <Text>{selectUspsAction.title}</Text>
          {
            selectUspsAction.description.map(text => <Text>
              {text}
            </Text>)
          }
        </View>
        <View style={styles.frame}>
          <SelectUspsFrame />
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

    </View>, 
    context.document.currentPage());
}
