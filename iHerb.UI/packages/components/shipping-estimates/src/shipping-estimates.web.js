import React from "react";
import { View, Text, Image, StyleSheet } from 'react-primitives';
import TextInput from "@iherb/react-primitive-text-input";
import styled from 'styled-components';
import { styles } from './styles/web'

export default (props) => {
    const {
        totalWeight,
        zipcode,
        getShippingMethods,
        onChangeZipCode,
        onChangeDestination,
        country,
        labels
    } = props

    const weightLbs = labels.weightLbs.slice(3, labels.weightLbs.length)
    
    return <View style={styles.root}>
        <Text style={styles.blackBold}>Get Shipping Estimates ?</Text>
        <Text style={styles.totalWeight} >{labels.totalWeightColon} {totalWeight}{weightLbs}</Text>
        <View style={styles.destination}>
            <Text style={styles.blackBold}>{labels.destination}</Text>
            <Text style={styles.country}>{country}</Text> 
            <Text style={styles.black}> | </Text>
            <Text style={styles.change} onPress={onChangeDestination}>{labels.change}</Text>
        </View>
        <Text style={styles.black}>Please type in your zip code and click on 'Calculate'.</Text>
        <View style={styles.actions}>
            
            <TextInput style={styles.textInput}
                onChangeText={onChangeZipCode}
                value={zipcode} />
                
            <View style={styles.button} >
                <Text onPress={getShippingMethods}> {labels.calculate} </Text>
            </View>
            
        </View>
    </View>
}
