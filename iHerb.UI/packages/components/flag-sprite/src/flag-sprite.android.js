import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import { ImageEditor } from 'react-native';
import { flags } from "./styles.native";

export default class FlagSprite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: "https://s.images-iherb.com/i/countryflags2_24px@1x.png"
        }
    }

    componentWillMount() {
        if(this.props.countryCode !== "-1") this.crop();
    }

    crop() {
        const position = flags[this.props.countryCode].position
        const cropData = {
            offset: { x: 0, y: position },
            size: { width: 24, height: 24 }    
        }
        ImageEditor.cropImage(
            'https://s.images-iherb.com/i/countryflags2_24px@1x.png',
            cropData,
            uri => this.setState({uri}),
            error => console.log(error)
        )
    }

    render() {
        return (
            <Image style={{ width: 24, height: 24 }}source={{uri: this.state.uri}}>
            </Image>
        )
    }
}