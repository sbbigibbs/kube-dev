import React from "react"
import {View, Text} from "react-primitives"

export const ast = {
    "type": "root",
    "children": [
        {
            "type": "tag",
            "tagName": "span",
            "attributes": [
                {
                    "key": "class",
                    "value": "free-shipping"
                }
            ],
            "children": [
                {
                    "type": "text",
                    "value": "Free shipping for orders over $20.00!"
                }
            ]
        },
        {
            "type": "tag",
            "tagName": "span",
            "attributes": [
                {
                    "key": "class",
                    "value": "additional-info" 
                }
            ],
            "children": [
                {
                    "type": "text",
                    "value": "Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks"
                }
            ]
        }
    ]
}

export const jsx = <View>
    <View className="free-shipping"><Text>Free shipping for orders over $20.00!</Text></View>
    <View className="additional-info"><Text>Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks</Text></View>
</View>