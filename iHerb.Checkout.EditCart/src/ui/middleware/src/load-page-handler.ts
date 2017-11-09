import redux from "iherb-redux"
import co from "co"

var actionTypes = redux.workflowCart.actionTypes
var actions = redux.workflowCart.actions

export const LoadPageHandler = props => store => next => action => co(function*(){
    const {
        GetShoppingCartService,
        GetAnonUserCart
    } = props

    next(action)

    if( action.type !== actionTypes.LOAD_PAGE) {
        return
    }

    try {
        const config = store.getState().config
        const loginToken = action.payload.loginToken
        const checkoutApi = action.payload.checkoutApi
        const myAccountApi = action.payload.myAccountApi
        const anonymousToken = action.payload.anonymousToken
        const language = action.payload.language
        const currency = action.payload.currency
        const country = action.payload.country
        const header = {
            ihPref: `lc=${language};ctc=${country};cc=${currency}`
        }
        
        store.dispatch(actions.refreshShoppingCart(header.ihPref))
        store.dispatch(actions.loadCountryList())
        store.dispatch(actions.getRecommendations())
        store.dispatch(actions.getWishlist())
    } 
    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})