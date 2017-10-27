import React from "react"
import {View, Text, StyleSheet} from "react-primitives"

export const html = `<span class=\"additional-info\">Seguimiento limitado.  Los pedidos de hasta $100 USD. Máximo 4 lbs (1.8 kg)</span>\n<div class=\"shipping-popup-info\"><span style=\"color: #FF1919; font-weight: bold;\">Derechos, impuestos y honrarios adicionales puede ser cobrados al momento de la entrega. </div></span>`

const styles = StyleSheet.create({
    popup: {
        color: "#FF1919",
        fontWeight: "bold"
    }
})

export const jsx = <View>
    <View>
        <View className="additional-info">
            <Text>
                Seguimiento limitado.  Los pedidos de hasta $100 USD. Máximo 4 lbs (1.8 kg)
            </Text>
        </View>
        <Text>
            \n
        </Text>
        <View className="shipping-popup-info">
            <View style={styles.popup}>
                <Text>
                    Derechos, impuestos y honrarios adicionales puede ser cobrados al momento de la entrega. 
                </Text>
            </View>
        </View>
    </View>
</View>