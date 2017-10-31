export const html = `<root>
<div>
        <br>
        <li>自2017年7月1号起,  进口纳税义务人半年度内只能享有6次符合税金免征额度NTD3000以下规定的进口包裹,  (半年度为1月1号与7月7号开始计算), 超过此限制包裹 , 半年度内将不再享有税金免征优惠。
            <a href=\"http://web.customs.gov.tw/ct.asp?xItem=79725&ctNode=4298\">更多详情。</a>
        </li><br>
        <li>订单价值超过99.33美金客户需要缴纳进口关务费和关税</li>
        <!-- START General Information --->
        <p><font color=\"#FF0000\">
            <strong>General Information</strong></font>
        </p>
        <ul class=\"black13-20\">
            <li>Due to the fluctuations of the exchange rate, orders with value very close to the tax-free limit may be assessed Duties and Taxes (D&T) as the currency exchange rate may vary from the order date to the customs clearance date.
            </li>
            <li>Please check with your local customs office in Taiwan to see if you can import the items, and if any additional licenses or permits are needed.
            </li>
        </ul>
        <!-- END General Information ---><br><br><!-- START Customs Information -->
        <p>
            <font color=\"#FF0000\">
                <strong>Customs Information</strong>
            </font>
        </p>
        <ul class=\"black13-20\">
            <li>For information about customs, import duties, etc., visit: 
                <a href=\"http://eweb.customs.gov.tw/\" target=\"_blank\">Customs Administration</a> 
            </li>
            <li>Orders over 
                <span style=\"color:red;\">USD $95.00</span> 
                (<span style=\"color:red;\"> NTD 3,000</span>
                ) may be subject to D&T.
            </li>
        </ul><!-- END Customs Information --><br><br><!-- START Shipping Information  -->
        <p>
            <font color=\"#FF0000\">
                <strong>Shipping</strong>
            </font>
        </p>
        <ul class=\"black13-20\">
            <li>
                <strong>DHL/UPS:</strong> 
                You may have to pay import taxes, customs duties, or a brokerage (handling) fee for your order. These charges are separate from your shipping fee, and you will be billed directly from the carrier of your choice.
            </li>
            <li>
                <strong>地方邮局派送:</strong> 
                适用于包裹价值不超过100美金重量不超过4磅（约1.8千克）的订单。使用此运输，跟踪服务可到目的地国家。但由于地方邮政网络的访问限制，终端交付递送环节无法跟踪。iHerb正在努力提高此运输的服务性能。
            </li>
        </ul>
        <!-- END SHIPPING INFORMATION  --><br><br><!-- START Contact Us Information -->
        <p>
            <font color=\"#FF0000\">
                <strong>Contact Us</strong>
            </font>
        </p>
        <ul class=\"black13-20\">
            <li>
                <a href=\"https://secure.iherb.com/info/Contact\">Click here</a> to get connected with iHerb's customer service.
            </li>
        </ul>
        <!-- END Contact Us Information -->
    </div>
</root>`


export const expected = `<root>
<div>
        <br>
        <li>自2017年7月1号起,  进口纳税义务人半年度内只能享有6次符合税金免征额度NTD3000以下规定的进口包裹,  (半年度为1月1号与7月7号开始计算), 超过此限制包裹 , 半年度内将不再享有税金免征优惠。
            <a href="http://web.customs.gov.tw/ct.asp?xItem=79725&ctNode=4298">更多详情。</a>
        </li><br>
        <li>订单价值超过99.33美金客户需要缴纳进口关务费和关税</li>
        <p><font color="#FF0000">
            <strong>General Information</strong></font>
        </p>
        <ul class="black13-20">
            <li>Due to the fluctuations of the exchange rate, orders with value very close to the tax-free limit may be assessed Duties and Taxes (D&T) as the currency exchange rate may vary from the order date to the customs clearance date.
            </li>
            <li>Please check with your local customs office in Taiwan to see if you can import the items, and if any additional licenses or permits are needed.
            </li>
        </ul>
        <br><br>
        <p>
            <font color="#FF0000">
                <strong>Customs Information</strong>
            </font>
        </p>
        <ul class="black13-20">
            <li>For information about customs, import duties, etc., visit: 
                <a href="http://eweb.customs.gov.tw/" target="_blank">Customs Administration</a> 
            </li>
            <li>Orders over 
                <span style="color:red;">USD $95.00</span> 
                (<span style="color:red;"> NTD 3,000</span>
                ) may be subject to D&T.
            </li>
        </ul><br><br>
        <p>
            <font color="#FF0000">
                <strong>Shipping</strong>
            </font>
        </p>
        <ul class="black13-20">
            <li>
                <strong>DHL/UPS:</strong> 
                You may have to pay import taxes, customs duties, or a brokerage (handling) fee for your order. These charges are separate from your shipping fee, and you will be billed directly from the carrier of your choice.
            </li>
            <li>
                <strong>地方邮局派送:</strong> 
                适用于包裹价值不超过100美金重量不超过4磅（约1.8千克）的订单。使用此运输，跟踪服务可到目的地国家。但由于地方邮政网络的访问限制，终端交付递送环节无法跟踪。iHerb正在努力提高此运输的服务性能。
            </li>
        </ul>
        <br><br>
        <p>
            <font color="#FF0000">
                <strong>Contact Us</strong>
            </font>
        </p>
        <ul class="black13-20">
            <li>
                <a href="https://secure.iherb.com/info/Contact">Click here</a> to get connected with iHerb's customer service.
            </li>
        </ul>
    </div>
</root>`
