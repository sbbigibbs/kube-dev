import React, { Component } from 'react'
import CartPage from '@iherb/ui-page-cart'
import { View, Text } from 'react-primitives'
import { Provider } from "react-redux"

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(navigationMiddleware),
  applyMiddleware(sagaMiddleware))

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className="App">
        <View className="App-header">
          <Text>Welcome to React</Text>
          <Provider store={store}>
            <CartPage />
          </Provider>

        </View>
      </View>
    )
  }
}

export default App
