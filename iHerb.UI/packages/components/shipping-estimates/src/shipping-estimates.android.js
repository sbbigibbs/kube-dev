import React from "react";
import { Button, NativeModules } from "react-native";
import { View, Text, Image, StyleSheet } from 'react-primitives';
import TextInput from "@iherb/react-primitive-text-input";
import styled from 'styled-components';
import { styles } from "./styles/native"

export default (props) => {
    const {
        totalWeight,
        zipcode,
        getShippingMethods,
        onChangeZipCode,
        onChangeDestination,
        country,
        requiresZip,
        labels
    } = props

    let zipCodeInput = <Text></Text>

    if(requiresZip) {
        zipCodeInput = <View><Text style={styles.gray}>Please type in your zip code and click on 'Calculate'.</Text>
        <View style={styles.actions}>
            <View style={styles.textInput}>
                <TextInput 
                        
                        onChangeText={onChangeZipCode}
                        value={zipcode} />
            </View>
            <View style={styles.button}>
                <Button 
                        title={labels.calculate}
                        color="#A9A9A9" 
                        onPress={getShippingMethods}/>
            </View>    
            
        </View></View>
    }
    
    const weightLbs = labels.weightLbs.slice(3, labels.weightLbs.length)
    
    return <View style={styles.root}>
        <Text style={styles.title}>Shipping</Text>
        <View style={styles.section}>
            <Text style={styles.weight} >{labels.totalWeightColon} {totalWeight}{weightLbs}</Text>
            <View style={styles.destination}>
                <Text style={styles.destinationText}>{labels.destination} </Text>
                <Text style={styles.country}>{country}</Text> 
                <Text stlye={styles.gray}> | </Text>
                <Text style={styles.change} onPress={onChangeDestination}>{labels.change}</Text>
            </View>
            {zipCodeInput}
        </View>
        
    </View>
}


