import React, { Component } from 'react'
import NumbersListBox from '@iherb/ui-numbers-list-box'
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
        </View>
      </View>
    )
  }
}

export default App
