import React, { Component } from 'react'
import {
  action,
  Frame,
  workflow,
} from '@iherb/us-view-cart-three-products'
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
          <Frame />
        </View>
      </View>
    )
  }
}

export default App
