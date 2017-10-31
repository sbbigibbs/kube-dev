import React, { Component } from 'react'
import {
  Animated,
  Image,
  RadioInput,
  ShippingMethod,
  StyleSheet,
  Text,
  TextInput,
  View,
} from '@iherb/react-primitive-components'

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
    this.state = {
      text: 'Useless Placeholder',
      enabled: true,
    }
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
        <ShippingMethod {...shippingMethodProps[0]} />
        <ShippingMethod {...shippingMethodProps[1]} />
        <ShippingMethod {...shippingMethodProps[2]} />
        <button onClick={this.animate}>Animate</button>
        <RadioInput
          enabled={this.state.enabled}
          onClick={this.animate}
        />
        <RadioInput
          enabled={!this.state.enabled}
          onClick={this.animate}
        />

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
