import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<span class=\"free-shipping\">$40.00 이상 주문 시 무료 배송. 구매 제품에 따라 예외가 적용될 수 있습니다.</span>\n<span class=\"additional-info\">전체 배송 추적 제공。$150.00 이하 주문; 각 주문당 20 lbs (9.0 kg) 이하 무게 제한.\n</span>\n<div class=\"shipping-popup-info\">영업일 기준 약 3-5일 소요 위치추적번호 제공.</div>`

export const jsx = <View>
    <View>
        <View className="free-shipping">
            <Text>
                $40.00 이상 주문 시 무료 배송. 구매 제품에 따라 예외가 적용될 수 있습니다.
            </Text>
        </View>
        <Text>
            \n
        </Text>
        <View className="additional-info">
            <Text>
                전체 배송 추적 제공。$150.00 이하 주문; 각 주문당 20 lbs (9.0 kg) 이하 무게 제한.\n
            </Text>
        </View>
        <Text>
            \n
        </Text>
        <View className="shipping-popup-info">
            <Text>
                영업일 기준 약 3-5일 소요 위치추적번호 제공.
            </Text>
        </View>
    </View>
</View>