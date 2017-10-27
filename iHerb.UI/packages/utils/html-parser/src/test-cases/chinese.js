export const html = `<root>
    <font color="#00FF00">自2017年7月1号起</font>
</root>`

export const ast = {
"type": "root",
"children": [
    {
        "type": "tag",
        "tagName": "font",
        "attributes": [
            {
                "key": "color",
                "value": "#00FF00"
            }
        ],
        "children": [ 
            {
                "type": "text",
                "value": "自2017年7月1号起"
            }
        ]
    }
]
}