import React, { Component } from 'react'
import ShippingEstimates from '@iherb/ui-component-shipping-estimates'
import { View, Text } from 'react-primitives'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className="App">
        <View className="App-header">
          <Text>Welcome to React</Text>
          <ShippingEstimates />
        </View>
      </View>
    )
  }
}

export default App
