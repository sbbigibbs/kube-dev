import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import { convertToJSX } from '@iherb/ui-util-html-jsx-generator'
import { styles } from "./styles/web"

export default class ErrorBox extends React.Component {
  render() {
    const {
        isCartError,
        errorMessage
    } = this.props
    
    let cartErrorTitle = isCartError ? 
        <Text style={styles.title}>Errors found in cart:</Text> : <Text></Text>
    let errMsg = errorMessage.indexOf("<") >= 0 ? 
        convertToJSX(errorMessage) : <Text>{errorMessage}</Text>
    
    return <View style={styles.error}>
            {cartErrorTitle}
            {errMsg}
    </View>
  }
}
