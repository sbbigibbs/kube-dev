import {fromJS} from "immutable"

/*
const initialState = {
    products: {
        "2": {
            imageSource: "https://www.images-iherb.com/l/CEN-22263-5.jpg",    
            title: "21st Centry, Cal Mag Zinc + D3, 90 Tablets",
            productId: "CEN-22263",
            weight: 0.41,
            promo: "Buy 3 more and save an extra 5%",
            price: 2.99,
            discount: "",
        },
        "3": {
            imageSource: "https://www.images-iherb.com/l/CEN-22263-5.jpg",    
            title: "Title 3",
            productId: "CEN-22263",
            weight: 0.50,
            promo: "Buy 5 more and save an extra 5%",
            price: 1.99,
            discount: "",
        }
    },
    orderBy: [
        "2",
        "3"
    ]
}
*/

const initialState = {
    products: {},
    orderBy: []
}

export default fromJS(initialState)