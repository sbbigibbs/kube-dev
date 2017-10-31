//export const html = `<root>
//    <span class="additional-info">有限追踪。订单最高为 100 美元。最重 4 磅（1.8 千克）</span>
//    <div class="shipping-popup-info">
//        <span style="color: #FF1919; font-weight: bold;">关税、税费和关务费可能会于交货时收取。
//        </span>
//    </div>
//</root>`

export const html = `<root>
    <span class="additional-info">有限追踪订单最高为 100 美元最重 4 磅</span>
    <div class="shipping-popup-info">
        <span style="">关税税费和关务费可能会于交货时收取
        </span>
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
                    "value": "additional-info"
                }
            ],
            "children": [
                {
                    "type": "text",
                    "value": "有限追踪。订单最高为 100 美元。最重 4 磅（1.8 千克）"
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
                    "type": "tag",
                    "tagName": "span",
                    "attributes": [
                        {
                            "key": "style",
                            "value": "color: #FF1919; font-weight: bold;"
                        }
                    ],
                    "children": [
                        {
                            "type": "text",
                            "value": "关税、税费和关务费可能会于交货时收取。"
                        }
                    ]
                }
            ]
        }
    ],

}