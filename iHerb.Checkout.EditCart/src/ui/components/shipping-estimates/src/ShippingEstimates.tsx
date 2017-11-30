import React from "react";
import { View, Text, Image, StyleSheet } from 'react-primitives';
//import TextInput from "@iherb/react-primitive-text-input";
import { styles } from './styles/shipping-estimates'
import { MobileWebCountryList } from '../../../containers/country-list/src/CountryList'

export default (props) => {
    const {
        totalWeight,
        zipcode,
        getShippingMethods,
        onChangeZipCode,
        onChangeDestination,
        country,
        labels,
        shipping,
        toggleShippingDisplay,
        showShipping
    } = props

    const weightLbs = labels.weightLbs.slice(3, labels.weightLbs.length)
    const shippingSection = showShipping ? <View style={styles.shippingSection}><View style={styles.destination}>
    <View style={styles.blackBold}><Text style={styles.blackBold}>{labels.destination}</Text></View>
        <View><Text>{country}</Text></View> 
        <View><MobileWebCountryList /></View>
    
    </View>
    <Text style={styles.grey14}>Type in your zip code and click on 'Calculate'.</Text>
    <View style={styles.actions}>
        <input style={styles.textInput}
            onChange={onChangeZipCode}
            placeholder="Zip/Postal Code"
            value={zipcode} />
            
        <View style={styles.button} >
            <Text onPress={getShippingMethods}> {labels.calculate} </Text>
        </View>
    </View>
    </View> : <View></View>

return <View style={styles.root}>
   
      <View style={(showShipping) ? styles.attributeNoBorder : styles.attribute} onClick={toggleShippingDisplay}>
          <View>
            <Text style={styles.label}>{labels.shippingColon}</Text>
            <View style={styles.weight}><Text style={styles.weight} >{labels.totalWeightColon} {totalWeight}{weightLbs}</Text></View>
          </View>
          <Text style={styles.value}>{shipping}</Text>
      </View>
      
      {shippingSection}
  
</View>
}
