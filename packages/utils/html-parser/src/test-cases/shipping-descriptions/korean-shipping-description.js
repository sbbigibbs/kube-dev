import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<root>
    <span class="free-shipping">
        $40.00 이상 주문 시 무료 배송. 구매 제품에 따라 예외가 적용될 수 있습니다.
    </span>
    <span class="additional-info">
        전체 배송 추적 제공。$150.00 이하 주문; 각 주문당 20 lbs (9.0 kg) 이하 무게 제한.\n
    </span>
    <div class="shipping-popup-info">
        영업일 기준 약 3-5일 소요 위치추적번호 제공.
    </div>
</root>`

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
                    "value": "$40.00 이상 주문 시 무료 배송. 구매 제품에 따라 예외가 적용될 수 있습니다."
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
                    "value": "전체 배송 추적 제공。$150.00 이하 주문; 각 주문당 20 lbs (9.0 kg) 이하 무게 제한."
                }
            ]
        },
        {
            "type": "tag",
            "tagName": "div",
            "attributes": [
                {
                    "key": "class",
                    "value": "shipping-popup-info"
                }
            ],
            "children": [
                {
                    "type": "text",
                    "value": "영업일 기준 약 3-5일 소요 위치추적번호 제공."
                }
            ]
        }
    ]
}