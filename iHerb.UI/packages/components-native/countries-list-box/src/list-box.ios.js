import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import FlagSprite from "@iherb/ui-flag-sprite"
import {TouchableOpacity} from "react-native"

export default ({onCountrySelected}) => {
    return (<View style={styles.root}>
        <TouchableOpacity onPress={onCountrySelected}>
            <View style={styles.countrySelect}>
                <FlagSprite countryCode="au" />
                <Text style={styles.label}>Austrailia</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCountrySelected}>
            <View style={styles.countrySelect}>
                <FlagSprite countryCode="us" />
                <Text style={styles.label}>United States</Text>
            </View>
        </TouchableOpacity>
        
    </View>)
}

const styles = StyleSheet.create({
    root:{
        paddingLeft: 15,
        paddingRight: 15
    },
    countrySelect: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 0.5,
        
        borderColor: "#4488a7"
        
    },
    label:{
        color: "#132d3d",
        marginLeft: 10
    }
    
})
