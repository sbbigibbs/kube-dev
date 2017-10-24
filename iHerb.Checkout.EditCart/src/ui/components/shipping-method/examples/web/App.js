import React, { Component } from 'react'
import ShippingMethod from '@iherb/ui-component-shipping-method'
import { View, Text } from 'react-primitives'

const shippingMethodProps = [
  {
    imageSource: 'https://s.images-iherb.com/i/ss/UPS-Grd.gif',
    title: 'Estimated Delivery: August 15 - August 16',
    shippingType: 'Expedited - $0.00 FREE!',
    shippingDesc: [],
    promos: [
      'Free shipping for orders over $20.00!',
      'No Po Box or APO',
    ]
  },
  {
    imageSource: 'https://s.images-iherb.com/i/ss/USPS-Pri.gif',
    title: 'Estimated Delivery: August 15 - August 21',
    shippingType: 'PO BOX or APO Address - $0.00 FREE!',
    shippingDesc: [],
    promos: [
      'Free shipping for orders over $20.00!',
      'Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks',
    ]
  },
  {
    imageSource: 'https://s.images-iherb.com/i/ss/UPS-Int.gif',
    title: 'Estimated Delivery: August 15',
    shippingType: 'Two Day - $10.27',
    shippingDesc: [],
  },
  {
    imageSource: 'https://s.images-iherb.com/i/ss/UPS-Int.gif',
    title: 'Estimated Delivery: August 14',
    shippingType: 'Next Day - $13.28',
    shippingDesc: [],
  },
]

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
        <ShippingMethod {...shippingMethodProps[0]} />
      </View>
    )
  }
}

export default App
