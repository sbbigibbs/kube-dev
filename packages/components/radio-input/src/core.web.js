import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import styles from "./styles"

export default ({enabled, onClick}) => {
  return enabled
    ? <View style={styles.enabled} onClick={() => onClick()}></View>
    : <View style={styles.disabled} onClick={() => onClick()}></View>
}
