import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import { flags } from './styles'

export default class FlagSprite extends React.Component {
    props: any
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image style={flags[this.props.countryCode]}
                   source={{uri: "https://s.images-iherb.com/i/countryflags2_24px@1x.png"}}/>
        )
    }
}