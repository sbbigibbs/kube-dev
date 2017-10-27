export default([
    {
        "type": "@@redux/INIT"
    },
    {
        "type": "@@redux/PROBE_UNKNOWN_ACTION_e.z.b.j.2"
    },
    {
        "type": "@@redux/INIT"
    },
    {"type":"workflow-cart/LOAD_PAGE"},
    {
        "type": "workflow-cart/LOAD_SHOPPING_CART",
        "payload": {
        "data": {
            "cart": {
            "prodList": [
                {
                "pid": "71632",
                "pn": "NBT-02345",
                "prodName": "Nature's Best, IsoPure, Aminos, Alpine Punch, 10.05 oz (285 g)",
                "frontImg": "https://www.images-iherb.com/m/NBT-02345-1.jpg",
                "stockStatus": "In Stock",
                "stockStatusType": 2,
                "retailPrice": "$34.99",
                "listPrice": "$21.34",
                "discountMsgLst": [],
                "discountsAppliedLst": [],
                "warnMsgLst": [],
                "prodQty": "2",
                "isAdjustedQty": false,
                "shipWeightLbs": "0.95",
                "totalPrice": "$42.68",
                "isAvailable": true,
                "isDiscontinued": false,
                "isOutOfStock": false
                },
                {
                "pid": "12",
                "pn": "DRB-00047",
                "prodName": "Doctor's Best, Digestive Enzymes, 90 Veggie Caps",
                "frontImg": "https://www.images-iherb.com/m/DRB-00047-11.jpg",
                "stockStatus": "In Stock",
                "stockStatusType": 2,
                "retailPrice": "$39.99",
                "listPrice": "$22.11",
                "discountMsgLst": [
                    "Buy 3 more and save an extra 5% "
                ],
                "discountsAppliedLst": [],
                "warnMsgLst": [],
                "prodQty": "1",
                "isAdjustedQty": false,
                "shipWeightLbs": "0.18",
                "totalPrice": "$22.11",
                "isAvailable": true,
                "isDiscontinued": false,
                "isOutOfStock": false,
                "discountLabelList": [
                    {
                    "label": "Shipping Saver",
                    "backgroundColor": "#6699CC",
                    "message": "Why does adding an item with the Shipping Saver tag lower the shipping cost? Shipping Saver items cost less to ship, so we can pass the savings along to you! This means that, when you add a Shipping Saver item to your cart, your shipping cost will decrease.",
                    "discountLabelType": 1
                    }
                ]
                },
                {
                "pid": "38095",
                "pn": "MLI-00248",
                "prodName": "Madre Labs, Argan Oil Hand Cream with Marula & Coconut Oils plus Shea Butter, Soothing and Unscented, 2.5 oz (71 g)",
                "frontImg": "https://www.images-iherb.com/m/MLI-00248-10.jpg",
                "stockStatus": "In Stock",
                "stockStatusType": 2,
                "retailPrice": "",
                "listPrice": "$5.00",
                "discountMsgLst": [
                    "Buy 3 more and save an extra 5% "
                ],
                "discountsAppliedLst": [],
                "warnMsgLst": [],
                "prodQty": "1",
                "isAdjustedQty": false,
                "shipWeightLbs": "0.24",
                "totalPrice": "$5.00",
                "isAvailable": true,
                "isDiscontinued": false,
                "isOutOfStock": false,
                "discountLabelList": [
                    {
                    "label": "Shipping Saver",
                    "backgroundColor": "#6699CC",
                    "message": "Why does adding an item with the Shipping Saver tag lower the shipping cost? Shipping Saver items cost less to ship, so we can pass the savings along to you! This means that, when you add a Shipping Saver item to your cart, your shipping cost will decrease.",
                    "discountLabelType": 1
                    }
                ]
                }
            ],
            "discountMsgLst": [
                "Congrats! You got $5 off your first order."
            ],
            "discountMsgPriceLst": [
                {
                "message": "Congrats! You got $5 off your first order.",
                "price": "$5.00"
                },
                {
                "message": "Loyalty Credit:",
                "price": "$20.00"
                }
            ],
            "discount": "$5.00",
            "discountPct": "10.0",
            "totalWeightLbs": "2.32",
            "prodQty": "4",
            "subTotal": "$44.79",
            "savings": "$5.00",
            "serviceID": 93,
            "shippingCost": "$0.00",
            "tax": "$0.00",
            "rewards": "$0.00",
            "hasCoupon": false,
            "orderTotal": "$44.79",
            "orderTotalInUSD": "64.7900",
            "specialNote": "",
            "purchaseErrLst": [],
            "basketErrLst": [],
            "basketUrl": "https://www.iherb.com/tr/cb?pcodes=NBT-02345qty2_DRB-00047_MLI-00248",
            "appliedCouponsLst": [
                {
                "couponCode": "WELCOME5",
                "couponDescription": "Promo Code"
                }
            ],
            "countryDisplayName": "United States",
            "countryGeneralDescription": "",
            "countryShippingDescription": "This area provides shipping prices for the United States only."
            }
        }
        }
    },
    {
        "type": "workflow-cart/LOAD_COUNTRY_LIST"
    },
    {
        "type": "workflow-cart/PUT_COUNTRY_LIST",
        "payload": {
        "countryList": [
            {
            "code": "US",
            "name": "United States",
            "requiresZip": true
            },
            {
            "code": "AU",
            "name": "Australia",
            "requiresZip": true
            },
            {
            "code": "BE",
            "name": "Belgium",
            "requiresZip": false
            },
            {
            "code": "BR",
            "name": "Brazil",
            "requiresZip": false
            },
            {
            "code": "CA",
            "name": "Canada",
            "requiresZip": false
            },
            {
            "code": "CN",
            "name": "China",
            "requiresZip": true
            },
            {
            "code": "FI",
            "name": "Finland",
            "requiresZip": false
            },
            {
            "code": "FR",
            "name": "France",
            "requiresZip": false
            },
            {
            "code": "DE",
            "name": "Germany",
            "requiresZip": false
            },
            {
            "code": "GB",
            "name": "Great Britain",
            "requiresZip": false
            },
            {
            "code": "HK",
            "name": "Hong Kong",
            "requiresZip": false
            },
            {
            "code": "IN",
            "name": "India",
            "requiresZip": false
            },
            {
            "code": "IE",
            "name": "Ireland",
            "requiresZip": false
            },
            {
            "code": "IL",
            "name": "Israel",
            "requiresZip": false
            },
            {
            "code": "JP",
            "name": "Japan",
            "requiresZip": true
            },
            {
            "code": "KZ",
            "name": "Kazakhstan",
            "requiresZip": false
            },
            {
            "code": "KR",
            "name": "Korea, Republic of",
            "requiresZip": true
            },
            {
            "code": "MO",
            "name": "Macau",
            "requiresZip": false
            },
            {
            "code": "MY",
            "name": "Malaysia",
            "requiresZip": false
            },
            {
            "code": "NL",
            "name": "Netherlands",
            "requiresZip": false
            },
            {
            "code": "NZ",
            "name": "New Zealand",
            "requiresZip": false
            },
            {
            "code": "NO",
            "name": "Norway",
            "requiresZip": false
            },
            {
            "code": "RU",
            "name": "Russia",
            "requiresZip": true
            },
            {
            "code": "SA",
            "name": "Saudi Arabia",
            "requiresZip": false
            },
            {
            "code": "SG",
            "name": "Singapore",
            "requiresZip": false
            },
            {
            "code": "ES",
            "name": "Spain",
            "requiresZip": false
            },
            {
            "code": "SE",
            "name": "Sweden",
            "requiresZip": false
            },
            {
            "code": "CH",
            "name": "Switzerland",
            "requiresZip": false
            },
            {
            "code": "TW",
            "name": "Taiwan",
            "requiresZip": false
            },
            {
            "code": "UA",
            "name": "Ukraine",
            "requiresZip": false
            },
            {
            "code": "AE",
            "name": "United Arab Emirates",
            "requiresZip": false
            },
            {
            "code": "-1",
            "name": "",
            "requiresZip": false
            },
            {
            "code": "AL",
            "name": "Albania",
            "requiresZip": false
            },
            {
            "code": "AD",
            "name": "Andorra",
            "requiresZip": false
            },
            {
            "code": "AO",
            "name": "Angola",
            "requiresZip": false
            },
            {
            "code": "AG",
            "name": "Antigua and Barbuda",
            "requiresZip": false
            },
            {
            "code": "AR",
            "name": "Argentina",
            "requiresZip": false
            },
            {
            "code": "AM",
            "name": "Armenia",
            "requiresZip": false
            },
            {
            "code": "AW",
            "name": "Aruba",
            "requiresZip": false
            },
            {
            "code": "AT",
            "name": "Austria",
            "requiresZip": false
            },
            {
            "code": "AZ",
            "name": "Azerbaijan",
            "requiresZip": false
            },
            {
            "code": "BS",
            "name": "Bahamas",
            "requiresZip": false
            },
            {
            "code": "BH",
            "name": "Bahrain",
            "requiresZip": false
            },
            {
            "code": "BD",
            "name": "Bangladesh",
            "requiresZip": false
            },
            {
            "code": "BB",
            "name": "Barbados",
            "requiresZip": false
            },
            {
            "code": "BY",
            "name": "Belarus",
            "requiresZip": false
            },
            {
            "code": "BZ",
            "name": "Belize",
            "requiresZip": false
            },
            {
            "code": "BM",
            "name": "Bermuda",
            "requiresZip": false
            },
            {
            "code": "BO",
            "name": "Bolivia",
            "requiresZip": false
            },
            {
            "code": "BA",
            "name": "Bosnia and Herzegovina",
            "requiresZip": false
            },
            {
            "code": "BW",
            "name": "Botswana",
            "requiresZip": false
            },
            {
            "code": "BN",
            "name": "Brunei ",
            "requiresZip": false
            },
            {
            "code": "BG",
            "name": "Bulgaria",
            "requiresZip": false
            },
            {
            "code": "BF",
            "name": "Burkina Faso",
            "requiresZip": false
            },
            {
            "code": "BI",
            "name": "Burundi",
            "requiresZip": false
            },
            {
            "code": "KH",
            "name": "Cambodia",
            "requiresZip": false
            },
            {
            "code": "CV",
            "name": "Cape Verde",
            "requiresZip": false
            },
            {
            "code": "KY",
            "name": "Cayman Islands",
            "requiresZip": false
            },
            {
            "code": "CL",
            "name": "Chile",
            "requiresZip": false
            },
            {
            "code": "CO",
            "name": "Colombia",
            "requiresZip": false
            },
            {
            "code": "CG",
            "name": "Congo",
            "requiresZip": false
            },
            {
            "code": "CK",
            "name": "Cook Islands",
            "requiresZip": false
            },
            {
            "code": "CR",
            "name": "Costa Rica",
            "requiresZip": false
            },
            {
            "code": "CI",
            "name": "Cote D'Ivoire",
            "requiresZip": false
            },
            {
            "code": "HR",
            "name": "Croatia",
            "requiresZip": false
            },
            {
            "code": "CY",
            "name": "Cyprus",
            "requiresZip": false
            },
            {
            "code": "CZ",
            "name": "Czech Republic",
            "requiresZip": false
            },
            {
            "code": "DK",
            "name": "Denmark",
            "requiresZip": false
            },
            {
            "code": "DM",
            "name": "Dominica",
            "requiresZip": false
            },
            {
            "code": "DO",
            "name": "Dominican Republic",
            "requiresZip": false
            },
            {
            "code": "EC",
            "name": "Ecuador",
            "requiresZip": false
            },
            {
            "code": "EG",
            "name": "Egypt",
            "requiresZip": false
            },
            {
            "code": "SV",
            "name": "El Salvador",
            "requiresZip": false
            },
            {
            "code": "EE",
            "name": "Estonia",
            "requiresZip": false
            },
            {
            "code": "FO",
            "name": "Faroe Islands",
            "requiresZip": false
            },
            {
            "code": "FJ",
            "name": "Fiji",
            "requiresZip": false
            },
            {
            "code": "GF",
            "name": "French Guiana",
            "requiresZip": false
            },
            {
            "code": "PF",
            "name": "French Polynesia",
            "requiresZip": false
            },
            {
            "code": "GM",
            "name": "Gambia",
            "requiresZip": false
            },
            {
            "code": "GE",
            "name": "Georgia",
            "requiresZip": false
            },
            {
            "code": "GI",
            "name": "Gibraltar",
            "requiresZip": false
            },
            {
            "code": "GR",
            "name": "Greece",
            "requiresZip": false
            },
            {
            "code": "GL",
            "name": "Greenland",
            "requiresZip": false
            },
            {
            "code": "GD",
            "name": "Grenada",
            "requiresZip": false
            },
            {
            "code": "GP",
            "name": "Guadeloupe",
            "requiresZip": false
            },
            {
            "code": "GU",
            "name": "Guam",
            "requiresZip": false
            },
            {
            "code": "GT",
            "name": "Guatemala",
            "requiresZip": false
            },
            {
            "code": "GG",
            "name": "Guernsey, Channel Islands",
            "requiresZip": false
            },
            {
            "code": "GY",
            "name": "Guyana",
            "requiresZip": false
            },
            {
            "code": "HT",
            "name": "Haiti",
            "requiresZip": false
            },
            {
            "code": "HN",
            "name": "Honduras",
            "requiresZip": false
            },
            {
            "code": "HU",
            "name": "Hungary",
            "requiresZip": false
            },
            {
            "code": "IS",
            "name": "Iceland",
            "requiresZip": false
            },
            {
            "code": "ID",
            "name": "Indonesia",
            "requiresZip": false
            },
            {
            "code": "IM",
            "name": "Isle of Man",
            "requiresZip": false
            },
            {
            "code": "IT",
            "name": "Italy",
            "requiresZip": false
            },
            {
            "code": "JM",
            "name": "Jamaica",
            "requiresZip": false
            },
            {
            "code": "JE",
            "name": "Jersey, Channel Islands",
            "requiresZip": false
            },
            {
            "code": "JO",
            "name": "Jordan",
            "requiresZip": false
            },
            {
            "code": "KE",
            "name": "Kenya",
            "requiresZip": false
            },
            {
            "code": "KW",
            "name": "Kuwait",
            "requiresZip": false
            },
            {
            "code": "KG",
            "name": "Kyrgyzstan",
            "requiresZip": false
            },
            {
            "code": "LV",
            "name": "Latvia",
            "requiresZip": false
            },
            {
            "code": "LB",
            "name": "Lebanon",
            "requiresZip": false
            },
            {
            "code": "LI",
            "name": "Liechtenstein",
            "requiresZip": false
            },
            {
            "code": "LT",
            "name": "Lithuania",
            "requiresZip": false
            },
            {
            "code": "LU",
            "name": "Luxembourg",
            "requiresZip": false
            },
            {
            "code": "MK",
            "name": "Macedonia",
            "requiresZip": false
            },
            {
            "code": "MG",
            "name": "Madagascar",
            "requiresZip": false
            },
            {
            "code": "MV",
            "name": "Maldives",
            "requiresZip": false
            },
            {
            "code": "ML",
            "name": "Mali",
            "requiresZip": false
            },
            {
            "code": "MT",
            "name": "Malta",
            "requiresZip": false
            },
            {
            "code": "MQ",
            "name": "Martinique",
            "requiresZip": false
            },
            {
            "code": "MU",
            "name": "Mauritius",
            "requiresZip": false
            },
            {
            "code": "MX",
            "name": "Mexico",
            "requiresZip": false
            },
            {
            "code": "MD",
            "name": "Moldova, Republic of",
            "requiresZip": false
            },
            {
            "code": "MC",
            "name": "Monaco",
            "requiresZip": false
            },
            {
            "code": "MN",
            "name": "Mongolia",
            "requiresZip": false
            },
            {
            "code": "ME",
            "name": "Montenegro",
            "requiresZip": false
            },
            {
            "code": "MZ",
            "name": "Mozambique",
            "requiresZip": false
            },
            {
            "code": "NA",
            "name": "Namibia",
            "requiresZip": false
            },
            {
            "code": "NC",
            "name": "New Caledonia",
            "requiresZip": false
            },
            {
            "code": "NI",
            "name": "Nicaragua",
            "requiresZip": false
            },
            {
            "code": "MP",
            "name": "Northern Mariana Islands",
            "requiresZip": false
            },
            {
            "code": "OM",
            "name": "Oman",
            "requiresZip": false
            },
            {
            "code": "PA",
            "name": "Panama",
            "requiresZip": false
            },
            {
            "code": "PG",
            "name": "Papua New Guinea",
            "requiresZip": false
            },
            {
            "code": "PY",
            "name": "Paraguay",
            "requiresZip": false
            },
            {
            "code": "PE",
            "name": "Peru",
            "requiresZip": false
            },
            {
            "code": "PH",
            "name": "Philippines",
            "requiresZip": false
            },
            {
            "code": "PL",
            "name": "Poland",
            "requiresZip": false
            },
            {
            "code": "PT",
            "name": "Portugal",
            "requiresZip": false
            },
            {
            "code": "QA",
            "name": "Qatar",
            "requiresZip": false
            },
            {
            "code": "RO",
            "name": "Romania",
            "requiresZip": false
            },
            {
            "code": "KN",
            "name": "Saint Kitts and Nevis",
            "requiresZip": false
            },
            {
            "code": "LC",
            "name": "Saint Lucia",
            "requiresZip": false
            },
            {
            "code": "VC",
            "name": "Saint Vincent and the Grenadines",
            "requiresZip": false
            },
            {
            "code": "WS",
            "name": "Samoa",
            "requiresZip": false
            },
            {
            "code": "SM",
            "name": "San Marino",
            "requiresZip": false
            },
            {
            "code": "SN",
            "name": "Senegal",
            "requiresZip": false
            },
            {
            "code": "RS",
            "name": "Serbia",
            "requiresZip": false
            },
            {
            "code": "SC",
            "name": "Seychelles",
            "requiresZip": false
            },
            {
            "code": "SX",
            "name": "Sint Maarten",
            "requiresZip": false
            },
            {
            "code": "SK",
            "name": "Slovakia",
            "requiresZip": false
            },
            {
            "code": "SI",
            "name": "Slovenia",
            "requiresZip": false
            },
            {
            "code": "SB",
            "name": "Solomon Islands",
            "requiresZip": false
            },
            {
            "code": "ZA",
            "name": "South Africa",
            "requiresZip": false
            },
            {
            "code": "LK",
            "name": "Sri Lanka",
            "requiresZip": false
            },
            {
            "code": "SR",
            "name": "Suriname",
            "requiresZip": false
            },
            {
            "code": "TJ",
            "name": "Tajikistan",
            "requiresZip": false
            },
            {
            "code": "TZ",
            "name": "Tanzania, United Republic of",
            "requiresZip": false
            },
            {
            "code": "TH",
            "name": "Thailand",
            "requiresZip": false
            },
            {
            "code": "TG",
            "name": "Togo",
            "requiresZip": false
            },
            {
            "code": "TT",
            "name": "Trinidad and Tobago",
            "requiresZip": false
            },
            {
            "code": "TN",
            "name": "Tunisia",
            "requiresZip": false
            },
            {
            "code": "TR",
            "name": "Turkey",
            "requiresZip": false
            },
            {
            "code": "UY",
            "name": "Uruguay",
            "requiresZip": false
            },
            {
            "code": "UZ",
            "name": "Uzbekistan",
            "requiresZip": false
            },
            {
            "code": "VU",
            "name": "Vanuatu",
            "requiresZip": false
            },
            {
            "code": "VE",
            "name": "Venezuela",
            "requiresZip": false
            },
            {
            "code": "VN",
            "name": "Vietnam",
            "requiresZip": false
            },
            {
            "code": "VG",
            "name": "Virgin Islands, British",
            "requiresZip": false
            },
            {
            "code": "YE",
            "name": "Yemen",
            "requiresZip": false
            },
            {
            "code": "ZM",
            "name": "Zambia",
            "requiresZip": false
            },
            {
            "code": "ZW",
            "name": "Zimbabwe",
            "requiresZip": false
            }
        ]
        }
    }
])