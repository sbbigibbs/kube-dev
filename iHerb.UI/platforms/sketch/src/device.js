import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-primitives';


const styles = {
    deviceTitle: {
        fontSize: 20,
        marginBottom: 20
    }
}

class Device extends React.Component {
    render() {
        
        
        const screenStyle = {
            width: this.props.device.width,
            marginRight: 100,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "#ededed",
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowRadius: 6,
            shadowOffset: {
                width: 0, height: 1
            },
            
            
            
            
        }
        
        return (
            <View>
                
                <Text style={styles.deviceTitle}>{this.props.device.name} {this.props.frame.lang}</Text>
                
                <View style={screenStyle}>
                    {this.props.frame.frame}
                </View>
            </View>
            
        )
    }
}

export default Device