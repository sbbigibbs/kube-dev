import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-primitives'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column'
  },
  col1: {
    flexDirection: 'row',
    backgroundColor: '#458500',
    height: 64,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15
  }
})

export default () => {
  return (
    <View style={styles.root}>
      <View style={styles.col1}>
        <Image style={{ width: 66, height: 21, marginRight: 5}} source={{uri: "file:///Users/dev/Downloads/footerIherblogo_2017-10-18/footerIherblogo@3x.png"}}/>
        <Image style={{ width: 78, height: 25}} source={{uri: "file:///Users/dev/Downloads/footerRewardslogo_2017-10-18/footerRewardslogo@3x.png"}}/>
        <Text style={{fontSize: 20, color: '#ffffff' , marginLeft: 10}}>Give 5%  Get 5%</Text>
      </View>
    </View>
  );
  
}