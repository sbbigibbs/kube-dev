import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<root>
    <span class="free-shipping">
        $40.00以上の注文で無料配送。商品によっては例外が適用される場合があります。
    </span>
    <span class=\"additional-info\">
        詳細トラッキング付き。最大20ポンド(9kg)まで。郵便私書箱は使用不可。
    </span>
    <div class=\"shipping-popup-info\">
        平均3-5日で配達 追跡番号あり
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
                    "value": "$40.00以上の注文で無料配送。商品によっては例外が適用される場合があります。"
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
                    "value": "詳細トラッキング付き。最大20ポンド(9kg)まで。郵便私書箱は使用不可。"
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
                    "value": "平均3-5日で配達 追跡番号あり"
                }
            ]
        }
    ]
}