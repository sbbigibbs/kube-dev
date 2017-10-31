export default([
  {
    "type": "workflow-cart/LOAD_PAGE",
    "payload": {
      "checkoutApi": "https://checkout-api.iherbpreprod.biz/v1",
      "myAccountApi": "https://myaccount-api.iherbpreprod.biz/v1",
      "loginToken": "b1ea908c-70a5-4584-a8bf-42388c8a77f2",
      "language": "en-US"
    }
  },
  {
    "type": "workflow-cart/LOAD_SHOPPING_CART",
    "payload": {
      "data": {
        "cart": {
          "prodList": [
            {
              "pid": "555",
              "pn": "NOW-03299",
              "prodName": "Now Foods, Elderberry & Zinc, 90 Lozenges",
              "frontImg": "https://www.images-iherb.com/m/NOW-03299-10.jpg",
              "stockStatus": "In Stock",
              "stockStatusType": 2,
              "retailPrice": "$15.99",
              "listPrice": "$9.16",
              "discountPct": "19.0",
              "discountMsgLst": [],
              "discountsAppliedLst": [
                "Quantity: ($6.41)",
                "Promo Code: ($5.77)"
              ],
              "warnMsgLst": [
                "Note: no more than 6 bottles of vitamins is allowed for Korea Destinations"
              ],
              "prodQty": "7",
              "isAdjustedQty": false,
              "shipWeightLbs": "0.83",
              "discount": "$12.18",
              "totalPrice": "$51.94",
              "isAvailable": true,
              "isDiscontinued": false,
              "isOutOfStock": false
            },
            {
              "pid": "38220",
              "pn": "SEA-01961",
              "prodName": "Sea Tangle Noodle Company, Kelp Noodles, 12 oz (340 g)",
              "frontImg": "https://www.images-iherb.com/m/SEA-01961-0.jpg",
              "stockStatus": "In Stock",
              "stockStatusType": 2,
              "retailPrice": "$4.65",
              "listPrice": "$3.25",
              "discountPct": "10.0",
              "discountMsgLst": [],
              "discountsAppliedLst": [
                "Quantity: ($2.28)"
              ],
              "warnMsgLst": [],
              "prodQty": "7",
              "isAdjustedQty": false,
              "shipWeightLbs": "0.95",
              "discount": "$2.28",
              "totalPrice": "$20.47",
              "isAvailable": true,
              "isDiscontinued": false,
              "isOutOfStock": false
            }
          ],
          "discountMsgLst": [
            "Extra 10% Discounts, Ends Wednesday, Oct 25th at 10:00 A.M. ",
            "FirstTimeDiscount",
            "Congrats! You got $5 off your first order."
          ],
          "discountMsgPriceLst": [
            {
              "message": "Extra 10% Discounts, Ends Wednesday, Oct 25th at 10:00 A.M. ",
              "price": "$5.77"
            },
            {
              "message": "FirstTimeDiscount",
              "price": "$3.62"
            },
            {
              "message": "Congrats! You got $5 off your first order.",
              "price": "$5.00"
            },
            {
              "message": "Loyalty Credit:",
              "price": "$20.00"
            }
          ],
          "discount": "$8.62",
          "discountPct": "16.4",
          "totalWeightLbs": "12.46",
          "prodQty": "14",
          "subTotal": "$43.79",
          "savings": "$23.08",
          "serviceID": 88,
          "shippingCost": "$0.00",
          "tax": "$0.00",
          "referalCode": "WOW123",
          "rewards": "$0.00",
          "hasCoupon": false,
          "orderTotal": "$43.79",
          "orderTotalInUSD": "63.7900",
          "specialNote": "",
          "purchaseErrLst": [],
          "basketErrLst": [
            "Due to Korean customs regulations, only 6 bottles of vitamins are allowed for Korean customers per order."
          ],
          "basketUrl": "https://m.iherbtest.com/tr/cb?pcodes=NOW-03299qty7_SEA-01961qty7",
          "appliedCouponsLst": [
            {
              "couponCode": "WOW123",
              "couponDescription": "Rewards Code"
            },
            {
              "couponCode": "WELCOME5",
              "couponDescription": "Promo Code"
            }
          ],
          "countryDisplayName": "Korea, Republic of",
          "countryGeneralDescription": "<div>\n<!-- START GENERAL INFORMATION --->\n\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>General Information</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>Due to the fluctuations of the exchange rate, orders with value very close to the tax-free limit may be assessed Duties and Taxes (D&T) as the currency exchange rate may vary from the order date to the customs clearance date.  </li>\n<li>Please check with your local customs office in Korea to see if you can import the items, and if any additional licenses or permits are needed.</li>\n</ul>\n<br />\n<!-- START CUSTOMS INFORMATION --></p>\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>Customs Information</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>For information about customs, import duties, etc., visit: <a href=\"http://www.customs.go.kr\" target=\"_blank\">Korea Customs Service</a>, <a href=\"http://www.mfds.go.kr/index.do\" target=\"_blank\">Ministry of Food and Drug Safety</a></li>\n<li>Import taxes will be imposed on customers when two or more orders enter Customs on the same day and the total value exceeds <font color=\"#FF0000\">150 USD</font>.</li>\n<li>iHerb will not be liable for packages held or confiscated by customs. </li>\n</ul>\n<br />\n<!-- PCC CODE INFORMATION --></p>\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>Personal Customs Clearance Code</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>Korean Customs office requires a Personal Customs Clearance code (PCC) that matches the name of the recipient. Please click <a href=\"http://www.iherb.com/info/Personal-Customs-Code\">here</a> for more details.</li>\n</ul>\n<br />\n<p>Also, please take following steps:</p>\n<p>1. If you are ordering for someone else, you must enter their name, PCC code and address.<br />\n2. The PCC code must match the name of the person receiving the package.<br />\n3. Make sure the name is in <strong>Korean</strong>. (If the code is registered under an English name, please use the same name that appears on the registration receipt.)<br />\n4. Make sure you enter the PCC code in the correct format:</p>\n<br />\n<p>The PCC code starts with P followed by 12 digits.<br />\n<strong>Correct format: P123451234512</strong></p>\n<br />\n<ul>\n<li>If you are a foreign citizen, please select \"<strong>Foreign Passport</strong>,\" and then select your country from the drop down list. Once your country is selected, please enter your passport number. Only the passport number should be entered without a country code.</li>\n</ul>\n<br />\n<!-- START SHIPPING INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Shipping</strong></font color=\"#FF0000\"></p>\n<ul>\n<li><strong>CJ Korea Express/Direct Korean Postal:</strong> You may have to pay import taxes and/or customs duties when the order limits exceed. These charges are separate from your shipping fee, and you will be billed directly from the carrier of your choice.</li>\n<li>If your order is not delivered to you due to incorrect shipping information, it will be disposed 30 days after the arrival date in Korea.</li>\n<li>The address system in South Korea has been changed due to the 'Road Name Address Act'. Please visit <a href=\"http://www.juso.go.kr/openEngPage.do\" target=\"_blank\">Road Name Address</a> site for more information. For delivery of shipments, customers are required to update the shipping address to the Road Name address in their account.</li>\n<li>Due to the new zip code system being implemented in Korea, all shipments must have 5-digit zip code included in the shipping address. Please click here or visit Korea Post’s official website <a href=\"www.epost.kr\" target=\"_blank\">ePOST</a> to check your 5-digit zip code.</li>\n</ul>\n<br />\n<!-- REFUNDS INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Refunds</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>Damage compensation: If the parcel contains damaged products when delivered, please accept the package first, and then follow the guidelines below.</li>\n</ul>\n<p><strong>CJ Korea:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a> and cc to <a href=\"mailto:iherb.korea@cj.net\" target=\"_blank\">iherb@cj.net</a><br />\n  <strong>Lotte:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a>  and cc to <a href=\"mailto:iherb@lotte.net\" target=\"_blank\">iherb@lotte.net</a> <br />\nPlease include: order number, phone number, email address, tracking number, damaged product name or product code, quantity, amount, damage description, 4+ proof pictures (outside the box, shipping label, 2+ of damaged items)<br />\n<strong>Damaged product(s) that haves been refunded must be returned/picked-up by our carrier. Once above information is submitted, the appropriate carrier will contact you to schedule a pick up for the damaged products.</strong></p>\n<br />\n<p>Lost packages: Please follow the guidelines below.<br />\n  <strong>CJ Korea:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a> and cc to <a href=\"mailto:iherb.korea@cj.net\" target=\"_blank\">iherb@cj.net</a> <br />\n<strong>Lotte:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a>  and cc to <a href=\"mailto:iherb@lotte.net\" target=\"_blank\">iherb@lotte.net</a><br />\nPlease include: order number, phone number, email address, tracking number and the total amount for the order.</p>\n<br />\n<!-- RESTRICTIONS INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Restrictions</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>At iHerb, we respect the rules and regulations of Korean government and do our best to block Customs prohibited products from our site. However, please be aware, the following substances are not allowed to be imported into Korea: Supplements containing Alpha Lipoic Acid, R-Lipoic Acid, Icariin, Yohimbe, Hoodia, Melatonin, Echinacea, Rhodiola, Slippery Elm, Black Cohosh, 5-HTP, Gaba, Paba, Diindolylmethane, Creatine, Fucoxanthin, Goldenseal or Raspberry Ketone </li>\n<li>All products that contain dairy as an ingredient, including milk, cheese or yogurt, are subject to an additional inspection at the Korean Customs office. Items containing meat, animal products, vegetables, nuts, grains and products intended for pets may be subject to quarantine inspections.</li>\n<li>Korean Customs may require a doctor's prescription for orders containing 6 or more supplements.</li>\n<li>For any raw honey products, if the order total weight along with other products exceeds 5 kg (on a single day), the duties and taxes will be assessed by the Korean Customs office.</li>\n<li>The Customs inspection may cause a clearance delay if your order includes above products.</li>\n</ul>\n<br />\n<!-- START CONTACT INFORMATION -->\n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Contact Us</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>Click <a href=\"https://secure.iherb.com/info/contact\">here</a> to get connected with iHerb's customer service.</li>\n<br />\n</ul>\n</div>  ",
          "countryShippingDescription": ""
        }
      }
    }
  },
  {
    "type": "workflow-cart/LOAD_COUNTRY_LIST"
  },
  {
    "type": "workflow-cart/CHANGE_PRODUCT_QUANTITY",
    "payload": {
      "productId": "555",
      "quantity": 5
    }
  },
  {
    "type": "workflow-cart/LOAD_SHOPPING_CART",
    "payload": {
      "data": {
        "cart": {
          "prodList": [
            {
              "pid": "555",
              "pn": "NOW-03299",
              "prodName": "Now Foods, Elderberry & Zinc, 90 Lozenges",
              "frontImg": "https://www.images-iherb.com/m/NOW-03299-10.jpg",
              "stockStatus": "In Stock",
              "stockStatusType": 2,
              "retailPrice": "$15.99",
              "listPrice": "$9.16",
              "discountPct": "19.0",
              "discountMsgLst": [],
              "discountsAppliedLst": [
                "Quantity: ($4.58)",
                "Promo Code: ($4.12)"
              ],
              "warnMsgLst": [],
              "prodQty": "5",
              "isAdjustedQty": false,
              "shipWeightLbs": "0.83",
              "discount": "$8.70",
              "totalPrice": "$37.10",
              "isAvailable": true,
              "isDiscontinued": false,
              "isOutOfStock": false
            },
            {
              "pid": "38220",
              "pn": "SEA-01961",
              "prodName": "Sea Tangle Noodle Company, Kelp Noodles, 12 oz (340 g)",
              "frontImg": "https://www.images-iherb.com/m/SEA-01961-0.jpg",
              "stockStatus": "In Stock",
              "stockStatusType": 2,
              "retailPrice": "$4.65",
              "listPrice": "$3.25",
              "discountPct": "10.0",
              "discountMsgLst": [],
              "discountsAppliedLst": [
                "Quantity: ($2.28)"
              ],
              "warnMsgLst": [],
              "prodQty": "7",
              "isAdjustedQty": false,
              "shipWeightLbs": "0.95",
              "discount": "$2.28",
              "totalPrice": "$20.47",
              "isAvailable": true,
              "isDiscontinued": false,
              "isOutOfStock": false
            }
          ],
          "discountMsgLst": [
            "Extra 10% Discounts, Ends Wednesday, Oct 25th at 10:00 A.M. ",
            "FirstTimeDiscount",
            "Congrats! You got $5 off your first order."
          ],
          "discountMsgPriceLst": [
            {
              "message": "Extra 10% Discounts, Ends Wednesday, Oct 25th at 10:00 A.M. ",
              "price": "$4.12"
            },
            {
              "message": "FirstTimeDiscount",
              "price": "$2.88"
            },
            {
              "message": "Congrats! You got $5 off your first order.",
              "price": "$5.00"
            },
            {
              "message": "Loyalty Credit:",
              "price": "$20.00"
            }
          ],
          "discount": "$7.88",
          "discountPct": "21.0",
          "totalWeightLbs": "10.80",
          "prodQty": "12",
          "subTotal": "$29.69",
          "savings": "$18.86",
          "serviceID": 88,
          "shippingCost": "$5.99",
          "tax": "$0.00",
          "referalCode": "WOW123",
          "rewards": "$0.00",
          "hasCoupon": false,
          "orderTotal": "$35.68",
          "orderTotalInUSD": "55.6800",
          "specialNote": "",
          "purchaseErrLst": [],
          "basketErrLst": [],
          "basketUrl": "https://m.iherbtest.com/tr/cb?pcodes=NOW-03299qty5_SEA-01961qty7",
          "appliedCouponsLst": [
            {
              "couponCode": "WOW123",
              "couponDescription": "Rewards Code"
            },
            {
              "couponCode": "WELCOME5",
              "couponDescription": "Promo Code"
            }
          ],
          "countryDisplayName": "Korea, Republic of",
          "countryGeneralDescription": "<div>\n<!-- START GENERAL INFORMATION --->\n\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>General Information</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>Due to the fluctuations of the exchange rate, orders with value very close to the tax-free limit may be assessed Duties and Taxes (D&T) as the currency exchange rate may vary from the order date to the customs clearance date.  </li>\n<li>Please check with your local customs office in Korea to see if you can import the items, and if any additional licenses or permits are needed.</li>\n</ul>\n<br />\n<!-- START CUSTOMS INFORMATION --></p>\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>Customs Information</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>For information about customs, import duties, etc., visit: <a href=\"http://www.customs.go.kr\" target=\"_blank\">Korea Customs Service</a>, <a href=\"http://www.mfds.go.kr/index.do\" target=\"_blank\">Ministry of Food and Drug Safety</a></li>\n<li>Import taxes will be imposed on customers when two or more orders enter Customs on the same day and the total value exceeds <font color=\"#FF0000\">150 USD</font>.</li>\n<li>iHerb will not be liable for packages held or confiscated by customs. </li>\n</ul>\n<br />\n<!-- PCC CODE INFORMATION --></p>\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>Personal Customs Clearance Code</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>Korean Customs office requires a Personal Customs Clearance code (PCC) that matches the name of the recipient. Please click <a href=\"http://www.iherb.com/info/Personal-Customs-Code\">here</a> for more details.</li>\n</ul>\n<br />\n<p>Also, please take following steps:</p>\n<p>1. If you are ordering for someone else, you must enter their name, PCC code and address.<br />\n2. The PCC code must match the name of the person receiving the package.<br />\n3. Make sure the name is in <strong>Korean</strong>. (If the code is registered under an English name, please use the same name that appears on the registration receipt.)<br />\n4. Make sure you enter the PCC code in the correct format:</p>\n<br />\n<p>The PCC code starts with P followed by 12 digits.<br />\n<strong>Correct format: P123451234512</strong></p>\n<br />\n<ul>\n<li>If you are a foreign citizen, please select \"<strong>Foreign Passport</strong>,\" and then select your country from the drop down list. Once your country is selected, please enter your passport number. Only the passport number should be entered without a country code.</li>\n</ul>\n<br />\n<!-- START SHIPPING INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Shipping</strong></font color=\"#FF0000\"></p>\n<ul>\n<li><strong>CJ Korea Express/Direct Korean Postal:</strong> You may have to pay import taxes and/or customs duties when the order limits exceed. These charges are separate from your shipping fee, and you will be billed directly from the carrier of your choice.</li>\n<li>If your order is not delivered to you due to incorrect shipping information, it will be disposed 30 days after the arrival date in Korea.</li>\n<li>The address system in South Korea has been changed due to the 'Road Name Address Act'. Please visit <a href=\"http://www.juso.go.kr/openEngPage.do\" target=\"_blank\">Road Name Address</a> site for more information. For delivery of shipments, customers are required to update the shipping address to the Road Name address in their account.</li>\n<li>Due to the new zip code system being implemented in Korea, all shipments must have 5-digit zip code included in the shipping address. Please click here or visit Korea Post’s official website <a href=\"www.epost.kr\" target=\"_blank\">ePOST</a> to check your 5-digit zip code.</li>\n</ul>\n<br />\n<!-- REFUNDS INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Refunds</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>Damage compensation: If the parcel contains damaged products when delivered, please accept the package first, and then follow the guidelines below.</li>\n</ul>\n<p><strong>CJ Korea:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a> and cc to <a href=\"mailto:iherb.korea@cj.net\" target=\"_blank\">iherb@cj.net</a><br />\n  <strong>Lotte:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a>  and cc to <a href=\"mailto:iherb@lotte.net\" target=\"_blank\">iherb@lotte.net</a> <br />\nPlease include: order number, phone number, email address, tracking number, damaged product name or product code, quantity, amount, damage description, 4+ proof pictures (outside the box, shipping label, 2+ of damaged items)<br />\n<strong>Damaged product(s) that haves been refunded must be returned/picked-up by our carrier. Once above information is submitted, the appropriate carrier will contact you to schedule a pick up for the damaged products.</strong></p>\n<br />\n<p>Lost packages: Please follow the guidelines below.<br />\n  <strong>CJ Korea:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a> and cc to <a href=\"mailto:iherb.korea@cj.net\" target=\"_blank\">iherb@cj.net</a> <br />\n<strong>Lotte:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a>  and cc to <a href=\"mailto:iherb@lotte.net\" target=\"_blank\">iherb@lotte.net</a><br />\nPlease include: order number, phone number, email address, tracking number and the total amount for the order.</p>\n<br />\n<!-- RESTRICTIONS INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Restrictions</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>At iHerb, we respect the rules and regulations of Korean government and do our best to block Customs prohibited products from our site. However, please be aware, the following substances are not allowed to be imported into Korea: Supplements containing Alpha Lipoic Acid, R-Lipoic Acid, Icariin, Yohimbe, Hoodia, Melatonin, Echinacea, Rhodiola, Slippery Elm, Black Cohosh, 5-HTP, Gaba, Paba, Diindolylmethane, Creatine, Fucoxanthin, Goldenseal or Raspberry Ketone </li>\n<li>All products that contain dairy as an ingredient, including milk, cheese or yogurt, are subject to an additional inspection at the Korean Customs office. Items containing meat, animal products, vegetables, nuts, grains and products intended for pets may be subject to quarantine inspections.</li>\n<li>Korean Customs may require a doctor's prescription for orders containing 6 or more supplements.</li>\n<li>For any raw honey products, if the order total weight along with other products exceeds 5 kg (on a single day), the duties and taxes will be assessed by the Korean Customs office.</li>\n<li>The Customs inspection may cause a clearance delay if your order includes above products.</li>\n</ul>\n<br />\n<!-- START CONTACT INFORMATION -->\n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Contact Us</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>Click <a href=\"https://secure.iherb.com/info/contact\">here</a> to get connected with iHerb's customer service.</li>\n<br />\n</ul>\n</div>  ",
          "countryShippingDescription": ""
        }
      }
    }
  },
  {
    "type": "workflow-cart/CHANGE_PRODUCT_QUANTITY",
    "payload": {
      "productId": "555",
      "quantity": 7
    }
  },
  {
    "type": "workflow-cart/LOAD_SHOPPING_CART",
    "payload": {
      "data": {
        "cart": {
          "prodList": [
            {
              "pid": "555",
              "pn": "NOW-03299",
              "prodName": "Now Foods, Elderberry & Zinc, 90 Lozenges",
              "frontImg": "https://www.images-iherb.com/m/NOW-03299-10.jpg",
              "stockStatus": "In Stock",
              "stockStatusType": 2,
              "retailPrice": "$15.99",
              "listPrice": "$9.16",
              "discountPct": "19.0",
              "discountMsgLst": [],
              "discountsAppliedLst": [
                "Quantity: ($6.41)",
                "Promo Code: ($5.77)"
              ],
              "warnMsgLst": [
                "Note: no more than 6 bottles of vitamins is allowed for Korea Destinations"
              ],
              "prodQty": "7",
              "isAdjustedQty": false,
              "shipWeightLbs": "0.83",
              "discount": "$12.18",
              "totalPrice": "$51.94",
              "isAvailable": true,
              "isDiscontinued": false,
              "isOutOfStock": false
            },
            {
              "pid": "38220",
              "pn": "SEA-01961",
              "prodName": "Sea Tangle Noodle Company, Kelp Noodles, 12 oz (340 g)",
              "frontImg": "https://www.images-iherb.com/m/SEA-01961-0.jpg",
              "stockStatus": "In Stock",
              "stockStatusType": 2,
              "retailPrice": "$4.65",
              "listPrice": "$3.25",
              "discountPct": "10.0",
              "discountMsgLst": [],
              "discountsAppliedLst": [
                "Quantity: ($2.28)"
              ],
              "warnMsgLst": [],
              "prodQty": "7",
              "isAdjustedQty": false,
              "shipWeightLbs": "0.95",
              "discount": "$2.28",
              "totalPrice": "$20.47",
              "isAvailable": true,
              "isDiscontinued": false,
              "isOutOfStock": false
            }
          ],
          "discountMsgLst": [
            "Extra 10% Discounts, Ends Wednesday, Oct 25th at 10:00 A.M. ",
            "FirstTimeDiscount",
            "Congrats! You got $5 off your first order."
          ],
          "discountMsgPriceLst": [
            {
              "message": "Extra 10% Discounts, Ends Wednesday, Oct 25th at 10:00 A.M. ",
              "price": "$5.77"
            },
            {
              "message": "FirstTimeDiscount",
              "price": "$3.62"
            },
            {
              "message": "Congrats! You got $5 off your first order.",
              "price": "$5.00"
            },
            {
              "message": "Loyalty Credit:",
              "price": "$20.00"
            }
          ],
          "discount": "$8.62",
          "discountPct": "16.4",
          "totalWeightLbs": "12.46",
          "prodQty": "14",
          "subTotal": "$43.79",
          "savings": "$23.08",
          "serviceID": 88,
          "shippingCost": "$0.00",
          "tax": "$0.00",
          "referalCode": "WOW123",
          "rewards": "$0.00",
          "hasCoupon": false,
          "orderTotal": "$43.79",
          "orderTotalInUSD": "63.7900",
          "specialNote": "",
          "purchaseErrLst": [],
          "basketErrLst": [
            "Due to Korean customs regulations, only 6 bottles of vitamins are allowed for Korean customers per order."
          ],
          "basketUrl": "https://m.iherbtest.com/tr/cb?pcodes=NOW-03299qty7_SEA-01961qty7",
          "appliedCouponsLst": [
            {
              "couponCode": "WOW123",
              "couponDescription": "Rewards Code"
            },
            {
              "couponCode": "WELCOME5",
              "couponDescription": "Promo Code"
            }
          ],
          "countryDisplayName": "Korea, Republic of",
          "countryGeneralDescription": "<div>\n<!-- START GENERAL INFORMATION --->\n\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>General Information</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>Due to the fluctuations of the exchange rate, orders with value very close to the tax-free limit may be assessed Duties and Taxes (D&T) as the currency exchange rate may vary from the order date to the customs clearance date.  </li>\n<li>Please check with your local customs office in Korea to see if you can import the items, and if any additional licenses or permits are needed.</li>\n</ul>\n<br />\n<!-- START CUSTOMS INFORMATION --></p>\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>Customs Information</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>For information about customs, import duties, etc., visit: <a href=\"http://www.customs.go.kr\" target=\"_blank\">Korea Customs Service</a>, <a href=\"http://www.mfds.go.kr/index.do\" target=\"_blank\">Ministry of Food and Drug Safety</a></li>\n<li>Import taxes will be imposed on customers when two or more orders enter Customs on the same day and the total value exceeds <font color=\"#FF0000\">150 USD</font>.</li>\n<li>iHerb will not be liable for packages held or confiscated by customs. </li>\n</ul>\n<br />\n<!-- PCC CODE INFORMATION --></p>\n<p class=\"black13-20\"><span class=\"red14b\"><font color=\"#FF0000\"><strong>Personal Customs Clearance Code</strong></font color=\"#FF0000\"></span></p>\n<ul>\n<li>Korean Customs office requires a Personal Customs Clearance code (PCC) that matches the name of the recipient. Please click <a href=\"http://www.iherb.com/info/Personal-Customs-Code\">here</a> for more details.</li>\n</ul>\n<br />\n<p>Also, please take following steps:</p>\n<p>1. If you are ordering for someone else, you must enter their name, PCC code and address.<br />\n2. The PCC code must match the name of the person receiving the package.<br />\n3. Make sure the name is in <strong>Korean</strong>. (If the code is registered under an English name, please use the same name that appears on the registration receipt.)<br />\n4. Make sure you enter the PCC code in the correct format:</p>\n<br />\n<p>The PCC code starts with P followed by 12 digits.<br />\n<strong>Correct format: P123451234512</strong></p>\n<br />\n<ul>\n<li>If you are a foreign citizen, please select \"<strong>Foreign Passport</strong>,\" and then select your country from the drop down list. Once your country is selected, please enter your passport number. Only the passport number should be entered without a country code.</li>\n</ul>\n<br />\n<!-- START SHIPPING INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Shipping</strong></font color=\"#FF0000\"></p>\n<ul>\n<li><strong>CJ Korea Express/Direct Korean Postal:</strong> You may have to pay import taxes and/or customs duties when the order limits exceed. These charges are separate from your shipping fee, and you will be billed directly from the carrier of your choice.</li>\n<li>If your order is not delivered to you due to incorrect shipping information, it will be disposed 30 days after the arrival date in Korea.</li>\n<li>The address system in South Korea has been changed due to the 'Road Name Address Act'. Please visit <a href=\"http://www.juso.go.kr/openEngPage.do\" target=\"_blank\">Road Name Address</a> site for more information. For delivery of shipments, customers are required to update the shipping address to the Road Name address in their account.</li>\n<li>Due to the new zip code system being implemented in Korea, all shipments must have 5-digit zip code included in the shipping address. Please click here or visit Korea Post’s official website <a href=\"www.epost.kr\" target=\"_blank\">ePOST</a> to check your 5-digit zip code.</li>\n</ul>\n<br />\n<!-- REFUNDS INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Refunds</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>Damage compensation: If the parcel contains damaged products when delivered, please accept the package first, and then follow the guidelines below.</li>\n</ul>\n<p><strong>CJ Korea:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a> and cc to <a href=\"mailto:iherb.korea@cj.net\" target=\"_blank\">iherb@cj.net</a><br />\n  <strong>Lotte:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a>  and cc to <a href=\"mailto:iherb@lotte.net\" target=\"_blank\">iherb@lotte.net</a> <br />\nPlease include: order number, phone number, email address, tracking number, damaged product name or product code, quantity, amount, damage description, 4+ proof pictures (outside the box, shipping label, 2+ of damaged items)<br />\n<strong>Damaged product(s) that haves been refunded must be returned/picked-up by our carrier. Once above information is submitted, the appropriate carrier will contact you to schedule a pick up for the damaged products.</strong></p>\n<br />\n<p>Lost packages: Please follow the guidelines below.<br />\n  <strong>CJ Korea:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a> and cc to <a href=\"mailto:iherb.korea@cj.net\" target=\"_blank\">iherb@cj.net</a> <br />\n<strong>Lotte:</strong> Please contact <a href=\"mailto:korea@iherb.com.\">korea@iherb.com</a>  and cc to <a href=\"mailto:iherb@lotte.net\" target=\"_blank\">iherb@lotte.net</a><br />\nPlease include: order number, phone number, email address, tracking number and the total amount for the order.</p>\n<br />\n<!-- RESTRICTIONS INFORMATION --> \n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Restrictions</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>At iHerb, we respect the rules and regulations of Korean government and do our best to block Customs prohibited products from our site. However, please be aware, the following substances are not allowed to be imported into Korea: Supplements containing Alpha Lipoic Acid, R-Lipoic Acid, Icariin, Yohimbe, Hoodia, Melatonin, Echinacea, Rhodiola, Slippery Elm, Black Cohosh, 5-HTP, Gaba, Paba, Diindolylmethane, Creatine, Fucoxanthin, Goldenseal or Raspberry Ketone </li>\n<li>All products that contain dairy as an ingredient, including milk, cheese or yogurt, are subject to an additional inspection at the Korean Customs office. Items containing meat, animal products, vegetables, nuts, grains and products intended for pets may be subject to quarantine inspections.</li>\n<li>Korean Customs may require a doctor's prescription for orders containing 6 or more supplements.</li>\n<li>For any raw honey products, if the order total weight along with other products exceeds 5 kg (on a single day), the duties and taxes will be assessed by the Korean Customs office.</li>\n<li>The Customs inspection may cause a clearance delay if your order includes above products.</li>\n</ul>\n<br />\n<!-- START CONTACT INFORMATION -->\n<p class=\"black13-20\"><font color=\"#FF0000\"><strong>Contact Us</strong></font color=\"#FF0000\"></p>\n<ul>\n<li>Click <a href=\"https://secure.iherb.com/info/contact\">here</a> to get connected with iHerb's customer service.</li>\n<br />\n</ul>\n</div>  ",
          "countryShippingDescription": ""
        }
      }
    }
  }
])