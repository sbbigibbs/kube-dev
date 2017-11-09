import redux from "iherb-redux"
import co from "co"

var actionTypes = redux.workflowCart.actionTypes
var actions = redux.workflowCart.actions

export const DeleteProductHandler = props => store => next => action => co(function*(){
    const {
        DeleteProductService
    } = props

    next(action)

    if(action.type !== actionTypes.REMOVE_PRODUCT) return

    try {
        const {productId} = action.payload
        const config = store.getState().config
        const anonymousToken = config.get("anonymousToken")
        const loginToken = config.get("loginToken")
        const checkoutApi = config.get("checkoutApi")
        const language = config.get("language")
        const currency = config.get("currency")
        const country = config.get("country")
        const header = {
            ihPref: `lc=${language};ctc=${country};cc=${currency}`
        }

        const service = createService()

        const {data} = yield service()
        store.dispatch(actions.loadShoppingCart(data))

        function createService() {
            return DeleteProductService(
                anonymousToken,
                loginToken,
                checkoutApi,
                header,
                productId
            )
        }
    }
    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})