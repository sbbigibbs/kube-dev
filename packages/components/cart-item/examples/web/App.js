import React, { Component } from 'react'
import CartItem from '@iherb/ui-component-cart-item'
import { View, Text } from 'react-primitives'

const cartItemProps = {
  imageSource: 'https://www.images-iherb.com/l/CEN-22263-5.jpg',
  title: '21st Centry, Cal Mag Zinc + D3, 90 Tablets',
  productId: 'CEN-22263',
  weight: '0.41lbs',
  promo: 'Buy 3 more and save an extra 5%',
  price: '$2.99',
  quantity: 1,
  discount: '1',
  total: '$2.99'
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className="App">
        <View className="App-header">
          <Text>Welcome to React</Text>
          <CartItem {...cartItemProps} />
        </View>
      </View>
    )
  }
}

export default App
