import {fromJS} from "immutable"

const initialState = {
    cart: {
        "prodList": [],
        "discountMsgLst": [],
        "discountLabelList": [],
        "discountMsgPriceLst": [],
        "discount": "",
        "discountPct": "",
        "totalWeightLbs": "",
        "prodQty": "",
        "subTotal": "",
        "savings": "",
        "serviceID": 0,
        "tax": "",
        "referalCode": "",
        "rewards": "",
        "hasCoupon": false,
        "orderTotal": "",
        "orderTotalInUSD": "",
        "specialNote": "",
        "purchaseErrLst": [],
        "basketErrLst": [],
        "basketUrl": "",
        "appliedCouponsLst": [],
        "countryDisplayName": "",
        "countryGeneralDescription": "",
        "countryShippingDescription": ""
    },
    zipcode: "",
    country: "United States",
    countryCode: "JP",
    couponCode: "",
    countryList: [],
    requiresZip: true,
    state: "VALID",
    promoCodeError: "",
    recommendationList: [],
    showShipping: false,
    selectedTab: 'cart'
}

export default fromJS(initialState)