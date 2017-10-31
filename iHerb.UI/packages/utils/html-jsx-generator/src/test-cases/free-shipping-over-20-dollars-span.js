import React from "react"
import {View, Text} from "react-primitives"

export const html = `
    <span class="free-shipping">Free shipping for orders over $20.00!</span>
    <span class="additional-info">Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks</span>
`

export const jsx = <View>
    <View className="free-shipping"><Text>Free shipping for orders over $20.00!</Text></View>
    <View className="additional-info"><Text>Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks</Text></View>
</View>