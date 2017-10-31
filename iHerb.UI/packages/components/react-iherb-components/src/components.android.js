import { TextInput as AndroidTextInput } from '@iherb/react-primitive-text-input'
import RadioInput from '@iherb/ui-component-radio-input'
import ShippingMethod from '@iherb/ui-component-shipping-method'

import Components, {
  Animated,
  Button,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
  // inject,
} from './inject'

Components.inject({
  TextInput: AndroidTextInput,
  RadioInput,
  ShippingMethod,
})

export {
  Animated,
  Button,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  Platform,
  RadioInput,
  ShippingMethod,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
}

export default {
  Animated,
  Button,
  Dimensions,
  Easing,
  Image,
  PixelRatio,
  Platform,
  RadioInput,
  ShippingMethod,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
}
