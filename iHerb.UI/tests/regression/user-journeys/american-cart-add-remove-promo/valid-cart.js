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
              "pid": "33850",
              "pn": "YUE-01427",
              "prodName": "YumEarth, Gummy Bears, Assorted  Flavors, 10 Snack Packs, 25.5 g Each",
              "frontImg": "https://www.images-iherb.com/m/YUE-01427-8.jpg",
              "stockStatus": "In Stock",
              "stockStatusType": 2,
              "retailPrice": "$7.99",
              "listPrice": "$5.60",
              "discountMsgLst": [],
              "discountsAppliedLst": [],
              "warnMsgLst": [],
              "prodQty": "5",
              "isAdjustedQty": false,
              "shipWeightLbs": "0.71",
              "totalPrice": "$28.00",
              "isAvailable": true,
              "isDiscontinued": false,
              "isOutOfStock": false
            }
          ],
          "discountMsgPriceLst": [
            {
              "message": "Loyalty Credit:",
              "price": "$20.00"
            }
          ],
          "totalWeightLbs": "3.55",
          "prodQty": "5",
          "subTotal": "$8.00",
          "savings": "$0.00",
          "serviceID": 0,
          "tax": "$0.00",
          "rewards": "$0.00",
          "hasCoupon": false,
          "orderTotal": "$8.00",
          "orderTotalInUSD": "28.0000",
          "specialNote": "",
          "purchaseErrLst": [],
          "basketErrLst": [],
          "basketUrl": "https://m.iherbtest.com/tr/cb?pcodes=YUE-01427qty5",
          "appliedCouponsLst": [],
          "countryDisplayName": "United States",
          "countryGeneralDescription": "",
          "countryShippingDescription": "This area provides shipping prices for the United States only."
        }
      }
    }
  },
  {
    "type": "workflow-cart/LOAD_COUNTRY_LIST"
  }
])