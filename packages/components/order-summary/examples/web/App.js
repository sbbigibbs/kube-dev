import React, { Component } from 'react'
import OrderSummary from '@iherb/ui-component-order-summary'
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
          <OrderSummary />
        </View>
      </View>
    )
  }
}

export default App
