import React from "react"
import { View, Text, Image, Touchable, Platform } from 'react-primitives';
import { convertToJSX } from '@iherb/ui-util-html-jsx-generator'
import { styles } from './styles/native'

export default class ErrorBox extends React.Component {
  render() {
    const {
        isCartError,
        errorMessage
    } = this.props
    
    let cartErrorTitle = <Text></Text>
    let errMsg = <Text>{errorMessage}</Text>;

    if(isCartError && errorMessage.indexOf("<") >= 0) {
        cartErrorTitle = <Text style={styles.title}>Errors found in cart:</Text>
        errMsg = convertToJSX(errorMessage)
    }
    
    return <View style={styles.error}>
            {cartErrorTitle}
            {errMsg}
    </View>
  }
}
