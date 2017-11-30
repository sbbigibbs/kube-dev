import * as React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

var color = 'blue';

class Button extends React.Component {
props: any
onPress() {
    if(color == 'red')
        color = 'blue'
    else
        color = 'red'

    this.forceUpdate()
}

  render() {
    color = this.props.color || color
    const style = StyleSheet.create({
          helloWorld: {
            color: color,
            textAlign: 'center',
            fontSize:36
          }
        });
    return (
      <View>
        <Text onPress={e => this.onPress()} style={style.helloWorld}>Hello World</Text>
      </View>
    );
  }
}

class ReactNativeHelloWorld extends React.Component {

    onPress() {
        if(color == 'red')
            color = 'blue'
        else
            color = 'red'

        this.forceUpdate()
    }

  render() {
    const style = StyleSheet.create({
          helloWorld: {
            color: color,
            textAlign: 'center',
            fontSize:36
          }
        });
    return (
      <View>
        <Button />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
