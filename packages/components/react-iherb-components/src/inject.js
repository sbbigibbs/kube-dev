import ReactPrimitives, {
  StyleSheet,
  View,
  Text,
  Image,
  Touchable,
  Easing,
  Animated,
  Dimensions,
  PixelRatio,
  Platform,
} from 'react-primitives'

let TextInput = undefined
let Button = undefined
let RadioInput = undefined
let ShippingMethod = undefined

function inject (api) {
  if (api.TextInput)
    TextInput = api.TextInput
  else if (api.Button)
    Button = api.Button
  else if (api.RadioInput)
    Button = api.RadioInput
  else if (api.ShippingMethod)
    Button = api.ShippingMethod
  else
    ReactPrimitives.inject(api)
}

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
  inject,
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
  inject,
}
