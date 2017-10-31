import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import RadioInput from '@iherb/ui-component-radio-input';

const styles = StyleSheet.create({
    shippingMethod: {

    borderRadius: 10,
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    
    padding: 12,
    marginBottom: 10
    
    },
    title: {
    color: "#000000",
    fontWeight: "bold",
    flexDirection: 'row'
    },
    shippingType: {
    color: '#458500',
    fontWeight: 'bold'
    },
    promo: {

    },
    image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: "contain"
    },
    input: {
    flex: 0,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    
    },
    description: {
    flexDirection: "column",
    flex: 4
    },
    typePrice:{
    flexDirection: "row",
    flexWrap: "wrap"
    },
    
    deliveryRange: {
        
        color: '#000000'
    }
});

export default (props) => {
    const {
        imageSource,
        title,
        shippingType,
        promos,
        enabled,
        deliveryRange,
        shippingDesc
    } = props

    return <View style={styles.shippingMethod}>
        <View style={styles.input}>
            <RadioInput enabled={enabled} />
        </View>
        
        <View style={styles.description}>
            <Image 
                style={styles.image} 
                source={{uri:imageSource}} />
            <Text style={styles.title}>{title}
                <Text style={styles.shippingType}> - {shippingType}</Text>
            </Text>
            <Text style={styles.deliveryRange}>Estimated Delivery:</Text>
            <Text style={styles.deliveryRange}>{deliveryRange}</Text>
            {
                shippingDesc.map(desc => {
                if(desc.includes("Free"))
                {
                    return <Text style={{color:"#f38a00"}}>{desc}</Text>
                }
                else{
                    return <Text style={{color:"#747474",fontSize: 12}}>{desc}</Text>
                }
                
            })
            }
            {
                promos && promos.map(value => <Text style={styles.promo}>
                    {value}
                </Text>)
            }
            </View>
    </View>
}
