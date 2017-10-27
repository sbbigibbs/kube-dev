import React from "react"
import {View, Text, StyleSheet} from "react-primitives"
import Link from "@iherb/ui-component-link"
import ListItem from "@iherb/ui-component-line-item"
import UnorderedList from "@iherb/ui-component-unordered-list"

export const html = `\n\n<div>\n<br><li>自2017年7月1号起,  进口纳税义务人半年度内只能享有6次符合税金免征额度NTD3000以下规定的进口包裹,  (半年度为1月1号与7月7号开始计算), 超过此限制包裹 , 半年度内将不再享有税金免征优惠。<a href=\"http://web.customs.gov.tw/ct.asp?xItem=79725&ctNode=4298\">更多详情。</a></li><br>\n<li>订单价值超过99.33美金客户需要缴纳进口关务费和关税</li>\n<!-- START General Information --->\n<p><font color=\"#FF0000\"><strong>General Information</strong></font></p>\n<ul class=\"black13-20\">\n<li>Due to the fluctuations of the exchange rate, orders with value very close to the tax-free limit may be assessed Duties and Taxes (D&T) as the currency exchange rate may vary from the order date to the customs clearance date.</li>\n<li>Please check with your local customs office in Taiwan to see if you can import the items, and if any additional licenses or permits are needed.</li>\n</ul>\n<!-- END General Information --->\n\n<br>\n<br>\n\n<!-- START Customs Information -->\n<p><font color=\"#FF0000\"><strong>Customs Information</strong></font></p>\n<ul class=\"black13-20\">\n<li>For information about customs, import duties, etc., visit: <a href=\"http://eweb.customs.gov.tw/\" target=\"_blank\">Customs Administration</a> </li>\n<li>Orders over <span style=\"color:red;\">USD $95.00</span> (<span style=\"color:red;\"> NTD 3,000</span>) may be subject to D&T.</li>\n</ul>\n<!-- END Customs Information -->\n\n<br>\n<br>\n\n<!-- START Shipping Information  -->\n<p><font color=\"#FF0000\"><strong>Shipping</strong></font></p>\n<ul class=\"black13-20\">\n<li><strong>DHL/UPS:</strong> You may have to pay import taxes, customs duties, or a brokerage (handling) fee for your order. These charges are separate from your shipping fee, and you will be billed directly from the carrier of your choice.</li>\n<li><strong>地方邮局派送:</strong> 适用于包裹价值不超过100美金重量不超过4磅（约1.8千克）的订单。使用此运输，跟踪服务可到目的地国家。但由于地方邮政网络的访问限制，终端交付递送环节无法跟踪。iHerb正在努力提高此运输的服务性能。\n\n</li>\n</ul>\n<!-- END SHIPPING INFORMATION  -->\n\n<br>\n<br>\n\n<!-- START Contact Us Information -->\n<p><font color=\"#FF0000\"><strong>Contact Us</strong></font></p>\n<ul class=\"black13-20\">\n<li><a href=\"https://secure.iherb.com/info/Contact\">Click here</a> to get connected with iHerb's customer service.</li>\n</ul>\n<!-- END Contact Us Information -->\n\n\n\n</div>\n`

const styles = StyleSheet.create({
    popup: {
        color: "#FF1919",
        fontWeight: "bold"
    },
    li: {
        //insert li styling here
    },
    ul: {
        //insert ul styling
    },
    title: {
        color: "#FF0000",
        fontWeight: "bold"
    },
    strong: {
        fontWeight: "bold"
    }
})

export const jsx =
    <View>
        <Text>
            \n\n   
        </Text>
        <View>
            <Text>
                \n
            </Text>
            <View></View>
            <View>
                <Text style={styles.li}>
                    自2017年7月1号起,  进口纳税义务人半年度内只能享有6次符合税金免征额度NTD3000以下规定的进口包裹,  (半年度为1月1号与7月7号开始计算), 超过此限制包裹 , 半年度内将不再享有税金免征优惠。
                    <Link url="http://web.customs.gov.tw/ct.asp?xItem=79725&ctNode=4298">
                        更多详情。
                    </Link>
                </Text>
            </View>
            <Text>
                \n
            </Text>
            <View/>
            <View>
                <Text style={styles.li}>
                    订单价值超过99.33美金客户需要缴纳进口关务费和关税
                </Text>
            </View>
            <Text>
                \n&lt;!-- START General Information --->\n
            </Text>
            <View>
                <Text style={styles.title}>
                    General Information
                </Text>
            </View>
            <Text>
                \n   
            </Text>
            <View className="black13-20 ul">
                <Text>
                    \n
                </Text>
                <View className={styles.li}>
                    <Text>
                        Due to the fluctuations of the exchange rate, 
                        orders with value very close to the tax-free limit may be assessed Duties and Taxes 
                        (D&amp;T) as the currency exchange rate may vary from the order date to the customs clearance date.
                    </Text>
                </View>
                <Text>
                    \n
                </Text>
                <View className={styles.li}>
                    <Text>
                        Please check with your local customs office in Taiwan to see if you can import the items, and if any additional licenses or permits are needed.
                    </Text>
                </View>
                <Text>
                    \n
                </Text>
            </View>
            <Text>
                \n&lt;!-- END General Information --->\n\n
            </Text>
            <View/>
            <Text>
                \n
            </Text>
            <View/>
            <Text>
                \n\n&lt;!-- START Shipping Information  -->\n
            </Text>
            <View>
                <Text style={styles.title}>
                    Shipping
                </Text>
            </View>
            <Text>
                \n
            </Text>
            <UnorderedList className="black13-20">
                <Text>
                    \n
                </Text>
                <ListItem>
                    <Text style={styles.strong}>
                        DHL./UPS:
                    </Text>
                    <Text>
                        You may have to pay import taxes, customs duties, or a brokerage (handling) fee for your order. 
                        These charges are separate from your shipping fee, and you will be billed directly from the 
                        carrier of your choice.
                    </Text>
                </ListItem>
                <Text>
                    \n
                </Text>
                <ListItem>
                    <Text style={styles.strong}>
                        地方邮局派送:
                    </Text>
                    <Text>
                        适用于包裹价值不超过100美金重量不超过4磅（约1.8千克）的订单。
                        使用此运输，跟踪服务可到目的地国家。但由于地方邮政网络的访问限制，
                        终端交付递送环节无法跟踪。iHerb正在努力提高此运输的服务性能。\n\n
                    </Text>
                    <Text>
                        \n
                    </Text>
                </ListItem>
            </UnorderedList>
            <Text>
                \n&lt;!-- END SHIPPING INFORMATION  -->\n\n
            </Text>
            <View></View>
            <Text>
                \n
            </Text>
            <View></View>
            <Text>
                \n\n&lt;!-- START Contact Us Information -->\n
            </Text>
            <View>
                <Text style={styles.title}>
                    Contact Us
                </Text>
            </View>
            <Text>
                \n
            </Text>
            <UnorderedList className="black13-20">
                <Text>
                    \n
                </Text>
                <ListItem>
                    <Link url="https://secure.iherb.com/info/Contact">
                        Click here
                    </Link>
                    <Text>
                        to get connected with iHerb's customer service.
                    </Text>
                </ListItem>
                <Text>
                    \n
                </Text>
            </UnorderedList>
            <Text>
                \n&lt;!-- END Contact Us Information -->\n\n\n\n
            </Text>
        </View>
        <Text>
            \n
        </Text>
    </View>
