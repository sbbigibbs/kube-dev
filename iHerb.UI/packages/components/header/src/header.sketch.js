import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-primitives';



const styles = StyleSheet.create({
  root: {
    backgroundColor: '#458500',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
    paddingLeft: 15,
    paddingRight: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  flex2: {
    
  }
})

export default () => {
  return (
    <View style={styles.root}>
      {/* <View style={styles.row}>
        <Image style={{ width: 21, height: 15}} source={{uri: "file:///Users/dev/Downloads/headerHamburger_2017-10-18/headerHamburger@3x.png"}}/>
        <Image style={{ width: 19, height: 19}} source={{uri: "file:///Users/dev/Downloads/headerSearch_2017-10-18/headerSearch@2x.png"}}/>
      </View>
      
      <View><Image style={{ width: 66, height: 21}} source={{uri: "file:///Users/dev/Downloads/headerIherblogo_2017-10-18/headerIherblogo@3x.png"}}/></View>
      <View style={styles.row}>
        <View><Image style={{ width: 22, height: 22}} source={{uri: "file:///Users/dev/Downloads/headerMyaccount_2017-10-18/headerMyaccount@3x.png"}}/></View>
        <View><Image style={{ width: 22, height: 22}} source={{uri: "file:///Users/dev/Downloads/headerCart_2017-10-18%20(1)/headerCart@3x.png"}}/></View>
      </View> */}

        <Image style={{ width: 21, height: 15}} source={{uri: "file:///Users/dev/Downloads/hamburgermenu.svg"}}/>
        <Image style={{ width: 19, height: 19}} source={{uri: "file:///Users/dev/Downloads/headerSearch_2017-10-18/headerSearch@2x.png"}}/>
        <Image style={{ width: 66, height: 21}} source={{uri: "file:///Users/dev/Downloads/headerIherblogo_2017-10-18/headerIherblogo@2x.png"}}/>
        <Image style={{ width: 22, height: 22}} source={{uri: "file:///Users/dev/Downloads/headerMyaccount_2017-10-18/headerMyaccount@2x.png"}}/>
        <Image style={{ width: 22, height: 22}} source={{uri: "file:///Users/dev/Downloads/headerCart_2017-10-18%20(1)/headerCart@2x.png"}}/>
    </View>
    
  );
}