import redux from "iherb-redux"
import co from "co"

var actionTypes = redux.workflowCart.actionTypes
var actions = redux.workflowCart.actions

export const UpdateShoppingCartHandler = props => store => next => action => co(function*() {
    const {
        GetShoppingCartService,
        GetAnonUserCart
    } = props

    next(action)

    if(action.type !== actionTypes.REFRESH_SHOPPING_CART) return

    try {
        const config = store.getState().config
        const anonymousToken = config.get("anonymousToken")
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const myAccountApi = config.get("myAccountApi")
        const language = config.get("language")
        const currency = config.get("currency")
        const country = config.get("country")
        const header = {
            ihPref: `lc=${language};ctc=${country};cc=${currency}`
        }

        const service = createService()

        const { data } = yield service()
        store.dispatch(actions.loadShoppingCart(data))
        
        function createService() {
            if(loginToken != null)
            return GetShoppingCartService(
                anonymousToken,
                loginToken,
                checkoutApi,
                header)

            return GetAnonUserCart(
                anonymousToken,            
                checkoutApi,
                header
            )
        }
    }

    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})