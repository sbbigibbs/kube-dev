import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<root>
    <span class="free-shipping">
        Бесплатная доставка для заказов более $60.00. Исключения могут быть применены к некоторым товарам согласно данным в корзине.
    </span><br />
    <span class="additional-info">
        Полное отслеживание. Максимально $150.00 и 5 кг. 
    </span>
    <div class="shipping-popup-info">
        Для просмотра местонахождения пунктов выдачи, пожалуйста, перейдите на
        <strong>
            <a href="http://boxberry.ru/find_an_office/" target="Blank">сайт Boxberry</a>
        </strong> 
        выберите Вашу страну и  введите название Вашего города. Информация об отделениях в Вашем городе 
        отобразится на карте. Далее, выберите на карте Ваше отделение для просмотра подробной информации.<br /> 
        Срок хранения заказа - 14 дней.<br /> 
        <strong>Выбирая данный вид доставки, Вы тем самым соглашаетесь с
            <a href="http://boxberry.ru/international_shipping/offer/" target="_blank">
                <strong> офертой </strong>
            </a>
        </strong>Боксберри.
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
                    "value": "Бесплатная доставка для заказов более $60.00. Исключения могут быть применены к некоторым товарам согласно данным в корзине."
                }
            ]
        },
        {
            "type": "tag",
            "tagName": "br"
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
                    "value": "Полное отслеживание. Максимально $150.00 и 5 кг."
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
                    "value": "Для просмотра местонахождения пунктов выдачи, пожалуйста, перейдите на"
                },
                {
                    "type": "tag",
                    "tagName": "strong",
                    "children": [
                        {
                            "type": "tag",
                            "tagName": "a",
                            "attributes": [
                                {
                                    "key": "href",
                                    "value": "http://boxberry.ru/find_an_office/"
                                },
                                {
                                    "key": "target",
                                    "value": "Blank"
                                }
                            ],
                            "children": [
                                {
                                    "type": "text",
                                    "value": "сайт Boxberry"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "выберите Вашу страну и  введите название Вашего города. Информация об отделениях в Вашем городе отобразится на карте. Далее, выберите на карте Ваше отделение для просмотра подробной информации."
                },
                {
                    "type": "tag",
                    "tagName": "br"
                },
                {
                    "type": "text",
                    "value": "Срок хранения заказа - 14 дней."
                },
                {
                    "type": "tag",
                    "tagName": "br"
                },
                {
                    "type": "tag",
                    "tagName": "strong",
                    "children": [
                        {
                            "type": "text",
                            "value": "Выбирая данный вид доставки, Вы тем самым соглашаетесь с"
                        },
                        {
                            "type": "tag",
                            "tagName": "a",
                            "attributes": [
                                {
                                    "key": "href",
                                    "value": "http://boxberry.ru/international_shipping/offer/"
                                },
                                {
                                    "key": "target",
                                    "value": "_blank"
                                }
                            ],
                            "children": [
                                {
                                    "type": "tag",
                                    "tagName": "strong",
                                    "children": [
                                        {
                                            "type": "text",
                                            "value": "офертой"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "Боксберри"
                }
            ]
        }
    ]
}