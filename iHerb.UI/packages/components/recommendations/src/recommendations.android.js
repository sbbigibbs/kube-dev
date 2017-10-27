import React from "react"
import { View, Text, Image, StyleSheet } from 'react-primitives';
import { FlatList } from 'react-native'

export default class Recommendations extends React.Component {
    render() {
        const {
            recList
        } = this.props
        console.log("recList: ", recList)
        return (
            <View>
                <Text style={styles.title}>
                    Recommendations
                </Text>
                <View style={styles.list}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={recList}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.image}
                                    source={{uri: item.frontImg}} />
                                <View>
                                    <Text style={styles.prodName}>
                                        {item.prodName}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.price}>
                                        {item.listPrice}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    prodName: {
        fontSize: 10,
        width: 75,
        height: 50
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 12,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    },
    title: {
        backgroundColor: '#f7f7f7',
        color: "#000000",
        fontWeight: "bold",
        paddingTop: 30,
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize: 14
    },
    image: {
        flex: 1,
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    price: {
        color: 'green',
        fontSize: 10,
        fontWeight: 'bold'
    }
})  