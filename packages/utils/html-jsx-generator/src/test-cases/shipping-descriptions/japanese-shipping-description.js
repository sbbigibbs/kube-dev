import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<span class=\"free-shipping\">$40.00以上の注文で無料配送。商品によっては例外が適用される場合があります。</span>\n<span class=\"additional-info\">詳細トラッキング付き。最大20ポンド(9kg)まで。郵便私書箱は使用不可。</span>\n<div class=\"shipping-popup-info\">平均3-5日で配達 追跡番号あり</div>`

export const jsx = <View>
    <View>
        <View className="free-shipping">
            <Text>
                $40.00以上の注文で無料配送。商品によっては例外が適用される場合があります。
            </Text>
        </View>
        <Text>
            \n
        </Text>
        <View className="additional-info">
            <Text>
                詳細トラッキング付き。最大20ポンド(9kg)まで。郵便私書箱は使用不可。
            </Text>
        </View>
        <Text>
            \n
        </Text>
        <View className="shipping-popup-info">
            <Text>
                平均3-5日で配達 追跡番号あり
            </Text>
        </View>
    </View>
</View>