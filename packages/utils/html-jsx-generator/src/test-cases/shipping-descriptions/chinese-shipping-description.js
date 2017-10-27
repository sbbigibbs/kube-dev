import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<span class=\"additional-info\">有限追踪。订单最高为 100 美元。最重 4 磅（1.8 千克）</span>\n<div class=\"shipping-popup-info\"><span style=\"color: #FF1919; font-weight: bold;\">关税、税费和关务费可能会于交货时收取。</div></span>`

const styles = StyleSheet.create({
    popup: {
        color: "#FF1919",
        fontWeight: "bold"
    }
})

export const jsx = <View>
    <View>
        <View className="additional-info">
            <Text>
                有限追踪。订单最高为 100 美元。最重 4 磅（1.8 千克）
            </Text>
        </View>
        <Text>
            \n
        </Text>
        <View className="shipping-popup-info">
            <View style={styles.popup}>
                <Text>
                    关税、税费和关务费可能会于交货时收取。
                </Text>
            </View>
        </View>
    </View>
</View>