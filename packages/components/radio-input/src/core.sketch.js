import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import styles from "./styles"

export default ({enabled}) => {
    return enabled  
        ? <View style={styles.enabled}></View>
        : <View style={styles.disabled}></View>
}