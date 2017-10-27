export const html = `<root> 
    <font color="#FF6600">
        <strong>Free shipping for orders over $20.00!</strong>
    </font> 
    <br/>
    <font color="#008000">
        <strong>No Po Box or APO</strong>
    </font> 
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
                    "value": "#FF6600"
                }
            ],
            "children": [
                {
                    "type": "tag",
                    "tagName": "strong",
                    "attributes": [],
                    "children": [
                        {
                            "type": "text",
                            "value": "Free shipping for orders over $20.00!"
                        }
                    ]
                }
            ]
        },
        {
            "type": "tag",
            "tagName": "br",
            "attributes": [],
            "children": []
        },
        {
            "type": "tag",
            "tagName": "font",
            "attributes": [
                {
                    "key": "color",
                    "value": "#008000" 
                }
            ],
            "children": [
                {
                    "type": "tag",
                    "tagName": "strong",
                    "attributes": [],
                    "children": [
                        {
                            "type": "text",
                            "value": "No Po Box or APO"
                        }
                    ]
                }
            ]
        }
    ]
}