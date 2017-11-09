import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import FlagSprite from "../../flag-sprite/src/index"
import { styles } from "./styles/web"

export default class ShippingCountrySelector extends React.Component {
    props: any
    render() {
        const {
            countryCode,
            countryName,
            onUpdateShippingCountry,
            requiresZip
        } = this.props
    
        return <View onPress={() => onUpdateShippingCountry(countryName, requiresZip, countryCode)}>
                <View style={styles.countrySelect}>
                    <FlagSprite countryCode={countryCode.toLowerCase()} />
                    <Text style={styles.label}>{countryName}</Text>
                </View>
            </View>
    }
}
