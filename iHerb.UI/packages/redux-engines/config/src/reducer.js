import initialState from "./initial-state"

const callbacks = {
    "workflow-cart/LOAD_PAGE": (state, action) => state
        .set("language", action.payload.language)
        .set("checkoutApi", action.payload.checkoutApi)
        .set("myAccountApi", action.payload.myAccountApi)
        .set("loginToken", action.payload.loginToken)
        .set("anonymousToken", action.payload.anonymousToken),
}

export default (state = initialState, action = {}) => {
    return callbacks[action.type] 
        ? callbacks[action.type](state, action)
        : state
}