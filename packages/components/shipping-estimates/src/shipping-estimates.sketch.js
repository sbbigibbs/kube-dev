import React from "react";
import { View, Text, Image, StyleSheet } from 'react-primitives';
import styled from 'styled-components';

const styles = {
    input: {
        borderColor: "#000",
        borderWidth: 1,
        width: 200
    },
    checkout: {
        marginTop: 8,
        padding: 8,
        color: "#fff",
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#999",
        width: 200
    },
    text: {
        fontWeight: 'bold',
        fontSize: 8,
        textAlign: 'center'
    },
    country: {
        color: "#ff8a00",
        fontWeight: "bold"
    },
    root: {
        flexDirection: "column",
        marginTop: 15,
        color: "#000000"
    },
    destination: {
        marginTop: 8,
        flexDirection: "row"
    },
    change: {
        color: "#1976d2",
        textDecorationLine: "underline"
    },
    actions: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "space-between",
        marginTop: 10,
        maxWidth: 320
    },
    textInput: {
        width: 200,
        height: 32,
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 5,
    },
    button: {
        flex: 1,
        backgroundColor: "#ededed",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        cursor: "pointer",
        height: 32
    }
}

export default (props) => {
    const {
        totalWeight,
        zipcode
    } = props

    return <View style={styles.root}>
        <Text style={{
            color: "#000000",
            fontWeight: "bold"
        }}>Get Shipping Estimates ?</Text>
        <Text style={{
            paddingBottom: 12,
            borderColor: "#ededed",
            borderBottomWidth: 1,
            borderStyle: "solid"
        }} >Total Weight: {totalWeight} lbs</Text>
        <View style={styles.destination}>
            <Text style={{
                color: "#000000",
                fontWeight: "bold"
            }}>Destination: </Text>
            <Text style={styles.country}>United States</Text> 
            <Text stlye={{
                color: "#000000"
            }}> | </Text>
            <Text style={styles.change}>Change</Text>
        </View>
        <Text style={{
            color: "#000000"
        }}>Please type in your zip code and click on 'Calculate'.</Text>
        <View style={styles.actions}>
            <Text style={styles.textInput}>Zip Code</Text>
            <Text style={styles.button}>Calculate</Text> 
        </View>
    </View>
}