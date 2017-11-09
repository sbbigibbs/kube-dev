import initialState from "./initial-state"

const callbacks = {
    "workflow-cart/LOAD_PAGE": (state, action) => state
        .set("language", action.payload.language)
        .set("currency", action.payload.currency)
        .set("country", action.payload.country)
        .set("checkoutApi", action.payload.checkoutApi)
        .set("myAccountApi", action.payload.myAccountApi)
        .set("anonymousToken", action.payload.anonymousToken)
        .set("loginToken", action.payload.loginToken),
}

export default (state = initialState, action = {}) => {
    return callbacks[action.type] 
        ? callbacks[action.type](state, action)
        : state
}