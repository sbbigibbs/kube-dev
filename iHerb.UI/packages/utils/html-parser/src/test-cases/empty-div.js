export const html = `<root><div></div></root>`

export const ast = {
    type: "root",
    children: [
        {
            type: "tag",
            tagName: "div",
            attributes: [],
            children: [ 
                {
                    type: "text",
                    value: ""
                }
            ]
        }
    ]
}