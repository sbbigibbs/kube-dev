import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import {actions} from "@iherb/ui-redux-workflow-cart"
import {connectAdvanced} from "react-redux"
import {TouchableOpacity} from "react-native"

export const selectorFactory = dispatch => (state, ownProps) => {
    const productId = ownProps.productId
    const numberSelected = quantity => () => dispatch(actions.changeProductQuantity({
        productId,
        quantity
    }))
    return {
        numberSelected
    }
}

export const Component = ({numberSelected}) => {
    return <View style={styles.root}>
        <TouchableOpacity onPress={numberSelected(1)}>
            <View style={styles.itemContainer}><Text style={styles.text}>1</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(2)}>
            <View style={styles.itemContainer}><Text style={styles.text}>2</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(3)}>
            <View style={styles.itemContainer}><Text style={styles.text}>3</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(4)}>
            <View style={styles.itemContainer}><Text style={styles.text}>4</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(5)}>
            <View style={styles.itemContainer}><Text style={styles.text}>5</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(6)}>
            <View style={styles.itemContainer}><Text style={styles.text}>6</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(7)}>
            <View style={styles.itemContainer}><Text style={styles.text}>7</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(8)}>
            <View style={styles.itemContainer}><Text style={styles.text}>8</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(9)}>
            <View style={styles.itemContainer}><Text style={styles.text}>9</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={numberSelected(10)}>
            <View style={styles.itemContainer}><Text style={styles.text}>10</Text></View>
        </TouchableOpacity>
    </View>
}


export default connectAdvanced(selectorFactory)(Component)

const styles = StyleSheet.create({
    root:{
        
    },
    itemContainer:{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 0.5,
        
        borderColor: "#4488a7"
    },
    text: {
        color: "#132d3d"
    }
    
})
