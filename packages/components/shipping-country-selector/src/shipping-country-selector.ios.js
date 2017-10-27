import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import FlagSprite from "@iherb/ui-flag-sprite"
import {TouchableOpacity} from "react-native"
import { styles } from "./styles/native"

export default class ShippingCountrySelector extends React.Component {
    render() {
        const {
            countryCode,
            countryName,
            onUpdateShippingCountry,
            requiresZip
        } = this.props
    
        return <TouchableOpacity onPress={() => onUpdateShippingCountry(countryName, requiresZip, countryCode)}>
                <View style={styles.countrySelect}>
                    <FlagSprite countryCode={countryCode.toLowerCase()} />
                    <Text style={styles.label}>{countryName}</Text>
                </View>
            </TouchableOpacity>
    }
}
