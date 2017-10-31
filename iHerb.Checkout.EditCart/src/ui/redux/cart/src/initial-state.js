import {fromJS} from "immutable"
/*
const initialState = {
    selectedShippingMethod: "382b1428-253f-439a-b376-0619d9ede303",
    cartItems: {
        data: {
            "0aabe5a6-0ca0-41d8-b288-cef6271abca8": {
                id: "0aabe5a6-0ca0-41d8-b288-cef6271abca8",
                productId: "2",
                quantity: 2
            },
            "0aabe5a6-0ca0-41d8-b288-cef6271abca9": {
                id: "0aabe5a6-0ca0-41d8-b288-cef6271abca9",
                productId: "3",
                quantity: 1
            }
        },
        orderBy: [
            "0aabe5a6-0ca0-41d8-b288-cef6271abca8",
            "0aabe5a6-0ca0-41d8-b288-cef6271abca9"
        ]
    }
}
*/

const initialState = {
    selectedShippingMethod: "",
    cartItems: {
        data: { },
        orderBy: [ ]
    }
}

export default fromJS(initialState)