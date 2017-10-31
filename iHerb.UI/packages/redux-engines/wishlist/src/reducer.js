import initialState from "./initial-state"
import {fromJS} from "immutable"

const callbacks = {
    "workflow-cart/LOAD_WISHLIST": (state, action) => {
        const wishListData = action.payload.wishListData
        return state
          .set("data", fromJS(wishListData))
    }
}

export default (state = initialState, action = {}) => {
    return callbacks[action.type] 
        ? callbacks[action.type](state, action)
        : state
}

