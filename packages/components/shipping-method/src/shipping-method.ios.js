import React from "react"
import { View, Text, Image, StyleSheet, Touchable, Platform } from 'react-primitives';
import RadioInput from '@iherb/ui-component-radio-input';
import { TouchableOpacity } from "react-native"
import { styles } from "./styles/native"

export default class ShippingMethod extends React.Component {
  render() {
    const {
      imageSource,
      title,
      shippingType,
      promos,
      onClick,
      enabled,
      deliveryRange,
      shippingDesc
    } = this.props
    
    return <TouchableOpacity onPress={onClick} >
    
      <View style={styles.shippingMethod}>
      
        <View style={styles.input}>
            <RadioInput 
              enabled={enabled}
              onClick={onClick}
              />
            
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
          {/* {
            shippingDesc.map(desc => {
            if(desc.includes("Free"))
            {
              return <Text style={{color:"#f38a00"}}>{desc}</Text>
            }
            else{
              return <Text style={{color:"#747474",fontSize: 12}}>{desc}</Text>
            }
            
          })
        } */}
          
            {
              promos && promos.map(value => <Text style={styles.promo}>
                {value}
              </Text>)
              }
          </View>
      
     
        
      
    </View>
    </TouchableOpacity>
  }
}
