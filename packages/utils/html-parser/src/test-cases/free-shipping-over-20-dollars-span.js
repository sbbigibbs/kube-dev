export const html = `<root> 
    <span class="free-shipping">Free shipping for orders over $20.00!</span>
    <span class="additional-info">Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks</span>
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
                    "value": "Free shipping for orders over $20.00!"
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
                    "value": "Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks"
                }
            ]
        }
    ]
}