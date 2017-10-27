import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import Link from "@iherb/ui-component-link"

export const html = `<span class=\"free-shipping\">Бесплатная доставка для заказов более $60.00. Исключения могут быть применены к некоторым товарам согласно данным в корзине.</span>\n<br />\n<span class=\"additional-info\">Полное отслеживание. Максимально $150.00 и 5 кг. </span>\n<div class=\"shipping-popup-info\">\nДля просмотра местонахождения пунктов выдачи, пожалуйста, перейдите на <strong><a href=\"http://boxberry.ru/find_an_office/\" target=\"Blank\">сайт Boxberry</a></strong> выберите Вашу страну и  введите название Вашего города. Информация об отделениях в Вашем городе отобразится на карте. Далее, выберите на карте Ваше отделение для просмотра подробной информации.<br /> Срок хранения заказа - 14 дней.\n<br /> <strong>Выбирая данный вид доставки, Вы тем самым соглашаетесь с<a href=\"http://boxberry.ru/international_shipping/offer/\" target=\"_blank\"><strong> офертой </strong></a></strong>Боксберри.</div>\n`

const styles = StyleSheet.create({
    popup: {
        color: "#FF1919",
        fontWeight: "bold"
    },
    strong: {
        fontWeight: "bold"
    }
})

export const jsx = <View>
    <View>
        <View className="free-shipping">
            <Text>
                Бесплатная доставка для заказов более $60.00. Исключения могут быть применены к некоторым товарам согласно данным в корзине.
            </Text>
        </View>
        <Text>
            \n\n\n
        </Text>
        <View className="additional-info">
            <Text>
                Полное отслеживание. Максимально $150.00 и 5 кг. 
            </Text>
        </View>
        <Text>
            \n
        </Text>
        <View className="shipping-popup-info">
            <View style={styles.popup}>
                <Text>
                    \nДля просмотра местонахождения пунктов выдачи, пожалуйста, перейдите на
                </Text>
                <Text style={styles.strong}>
                    <Link url="http://boxberry.ru/find_an_office/">
                        сайт Boxberry
                    </Link>
                </Text>
                <Text>
                     выберите Вашу страну и  введите название Вашего города. Информация об отделениях в Вашем городе отобразится на карте. 
                     Далее, выберите на карте Ваше отделение для просмотра подробной информации. \n
                     Срок хранения заказа - 14 дней.\n\n
                </Text>
                <Text style={styles.strong}>
                    Срок хранения заказа - 14 дней.\n\n
                </Text>
                <Text style={styles.strong}>
                    Выбирая данный вид доставки, Вы тем самым соглашаетесь с
                    <Link url="http://boxberry.ru/international_shipping/offer/">
                        <Text style={styles.strong}>
                            офертой 
                        </Text>
                    </Link>
                </Text>
                <Text>
                    Боксберри \n
                </Text>
            </View>
        </View>
    </View>
</View>