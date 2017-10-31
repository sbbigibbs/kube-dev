import initialState from "./initial-state"
import {actionTypes} from "../../workflow-cart/src/index"
import {fromJS} from "immutable"
import {convertToJSX} from "@iherb/ui-util-html-jsx-generator"

export default (state = initialState, action = {}) => {
    const callbacks = {
        [actionTypes.UPDATE_SHIPPING_METHODS]: handleUpdateShippingMethods
    }

    const callback = callbacks[action.type]

    return callback ? callback(state, action) : state
}

function handleUpdateShippingMethods(state, action) {
    const {shippingMethods} = action.payload
    return shippingMethods.reduce((state, method) => {
        const {
            serviceID,
            imgUrl,
            name,
            price,
            fromDate,
            toDate,
            desc
        } = method

        // const shippingDescriptions = convertToJSX(desc).props.children.map(child => {
        //     return child.props.children[0].props.children
        // })

        const deliveryRange = fromDate !== toDate ? `${fromDate} - ${toDate}`: fromDate;
        return state
            .setIn(["items", serviceID], fromJS({
                shippingMethodId: serviceID,
                imageSource: imgUrl,
                title: name,
                shippingType: price,
                promos: [],
                price,
                deliveryRange,
                shippingDesc: desc
            }))
            .updateIn(["orderBy"], orderBy => orderBy.push(serviceID))

    }, initialState)
}
