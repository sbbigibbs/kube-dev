import React, { Component } from 'react'
import TextInput from '@iherb/react-primitive-text-input'
import { View, Text, Animated } from 'react-primitives'

class App extends Component {
  animatedMargin = new Animated.Value(20)
  animate = () => {
    Animated.timing(
      this.animatedMargin, {
        toValue: 200,
        duration: 1000,
      }
    ).start()
  }

  constructor(props) {
    super(props)
    this.state = { text: 'Useless Placeholder' }
  }

  render() {
    return (
      <View className="App">
        <View className="App-header">
          <Text>Welcome to React</Text>
        </View>
        <Text className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Text>
        <TextInput
          style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <button onClick={this.animate}>Animate</button>
        <Animated.View style={Object.assign(
            {}, {
              width: 40,
              height: 40,
              backgroundColor: 'red',
          }, {
            marginTop: this.animatedMargin,
          }
        )}
        />
      </View>
    )
  }
}

export default App
