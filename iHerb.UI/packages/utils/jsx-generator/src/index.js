import React from "react"
import {View, Text} from "react-primitives"

export const createJSX = ast => buildRoot(ast)

export function buildRoot(ast) {
    const children = buildChildren(ast.children)
    return <View>{children}</View>
}

export function buildTag(ast) {
    const attributes = buildAttributes(ast.attributes)
    const children = buildChildren(ast.children)
    return <View {...attributes}>{children}</View>
}

export function buildChildren(children) {
    const callbacks = {
        "tag": buildTag,
        "text": buildText
    }

    return children.map( child => {
        return callbacks[child.type](child)
    })
}

export function buildAttributes(attributes) {
    return attributes.reduce( (obj, attribute) => {
        if(attribute.key === "class")
            return Object.assign(obj, {}, {
                className: attribute.value
            })

        return Object.assign(obj, {}, attribute)
    }, {})
}

export function buildText(ast) {
    if(!ast.value)
        return <Text></Text>

    return <Text>{ast.value}</Text>
}