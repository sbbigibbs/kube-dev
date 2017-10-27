import {fromJS} from "immutable"

const initialState = {
    cart: {
        "prodList": [],
        "discountMsgLst": [],
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
    recommendationList: []
}

export default fromJS(initialState)