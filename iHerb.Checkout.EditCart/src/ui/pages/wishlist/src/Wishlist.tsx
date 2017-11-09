import React from "react"
import { View, Text } from 'react-primitives'
import Containers from 'iherb-containers'
import {connectAdvanced} from "react-redux"

export const Component =  ({isEmpty}) => {
    if( isEmpty )
        return <View>
            <Text>Wishlist Empty</Text>
        </View>

    return <View>
        <Containers.Wishlist />
    </View>
}

export const selectorFactory = dispatch => state => {
    return {
        isEmpty: (state.wishlist.getIn(["data"]).size === 0)
    }
}

export default connectAdvanced(selectorFactory)(Component)