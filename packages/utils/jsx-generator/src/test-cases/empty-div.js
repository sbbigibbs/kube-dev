import React from "react"
import {View, Text} from "react-primitives"

export const ast = {
    type: "root",
    children: [
        {
            type: "tag",
            tagName: "div",
            attributes: [],
            children: [ 
                {
                    type: "text",
                    value: ""
                }
            ]
        }
    ]
}

export const jsx = <View>
    <View><Text></Text></View>
</View>