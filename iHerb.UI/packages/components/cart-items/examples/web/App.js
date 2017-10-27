import React, { Component } from 'react'
import CartItems from '@iherb/ui-component-cart-items'
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
          <CartItems>
          </CartItems>
        </View>
      </View>
    )
  }
}

export default App
