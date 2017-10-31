import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<root>
    <span class="additional-info">
        Seguimiento limitado.  Los pedidos de hasta $100 USD. Máximo 4 lbs (1.8 kg)
    </span>
    <div class="shipping-popup-info">
        <span style="color: #FF1919; font-weight: bold;">
            Derechos, impuestos y honrarios adicionales puede ser cobrados al momento de la entrega. 
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
                    "value": "Seguimiento limitado.  Los pedidos de hasta $100 USD. Máximo 4 lbs (1.8 kg)"
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
                            "value": "Derechos, impuestos y honrarios adicionales puede ser cobrados al momento de la entrega."
                        }
                    ]
                }
            ]
        }
    ]
}