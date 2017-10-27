import React, { Component } from 'react'
import RadioInput from '@iherb/ui-component-radio-input'
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
  }

  render() {
    const {
      enabled,
    } = this.props

    return (
      <View className="App">
        <View className="App-header">
          <Text>Welcome to React</Text>
          <RadioInput
            enabled={enabled}
            onClick={this.animate}
          />
        </View>

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
