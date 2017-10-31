export const html = `<root>
    <font color="#00FF00">Free Shipping</font>
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
                    "value": "Free Shipping"
                }
            ]
        }
    ]
}