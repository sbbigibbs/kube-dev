import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import { TouchableOpacity } from "react-native"
import styles from "./styles"

export default ({enabled, onClick}) => {
    return enabled  
        ? <TouchableOpacity onPress={() => onClick()}><View style={styles.enabled}></View></TouchableOpacity>
        : <TouchableOpacity onPress={() => onClick()}><View style={styles.disabled}></View></TouchableOpacity>
}