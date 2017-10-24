import {fromJS} from "immutable"
/*
const initialState = {
    items: {
        "382b1428-253f-439a-b376-0619d9ede303": {
            shippingMethodId: "382b1428-253f-439a-b376-0619d9ede303",
            imageSource: "https://s.images-iherb.com/i/ss/UPS-Grd.gif",
            title: "Estimated Delivery: August 15 - August 16",
            shippingType: "Expedited - $0.00 FREE!",
            promos: [
                "Free shipping for orders over $20.00!",
                "No Po Box or APO"
            ],
            price: {
                default: 0
            }
        },
        "146aeccd-550a-44fb-ac5e-80704998297a": {
            shippingMethodId: "146aeccd-550a-44fb-ac5e-80704998297a",
            imageSource: "https://s.images-iherb.com/i/ss/USPS-Pri.gif",
            title: "Estimated Delivery: August 15 - August 21",
            shippingType: "PO BOX or APO Address - $0.00 FREE!",
            promos: [
                "Free shipping for orders over $20.00!",
                "Orders of $80 or less, max 6 lbs., APO takes up to 4 weeks"
            ],
            price: {
                default: 0
            }
        },
        "8096adeb-f8c6-4bd3-8da5-a50c03e4a5c7": {
            shippingMethodId: "8096adeb-f8c6-4bd3-8da5-a50c03e4a5c7",
            imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
            title: "Estimated Delivery: August 15",
            shippingType: "Two Day - $10.27",
            price: {
                default: 10.27 
            }
        },
        "4a477073-2d63-46aa-ba6c-9a48cde08e73": {
            shippingMethodId: "4a477073-2d63-46aa-ba6c-9a48cde08e73",
            imageSource: "https://s.images-iherb.com/i/ss/UPS-Int.gif",
            title: "Estimated Delivery: August 14",
            shippingType: "Next Day - $13.28",
            price: {
                default: 13.28
            }
        }
    },
    orderBy: [
        "382b1428-253f-439a-b376-0619d9ede303",
        "146aeccd-550a-44fb-ac5e-80704998297a",
        "8096adeb-f8c6-4bd3-8da5-a50c03e4a5c7",
        "4a477073-2d63-46aa-ba6c-9a48cde08e73"
    ]
}
*/

const initialState = {
    items: { },
    orderBy: [ ]
}

export default fromJS(initialState)