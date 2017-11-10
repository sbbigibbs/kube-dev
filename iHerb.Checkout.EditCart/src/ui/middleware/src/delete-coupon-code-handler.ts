import redux from "iherb-redux"
import co from "co"

var actionTypes = redux.workflowCart.actionTypes
var actions = redux.workflowCart.actions

export const DeleteCouponCodeHandler = props => store => next => action => co(function*(){
    const {
        DeleteCouponService
    } = props

    next(action)

    if(action.type !== actionTypes.DELETE_COUPONCODE) return

    try {
        const {couponCode} = action.payload
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

        yield service()
        
        store.dispatch(actions.refreshShoppingCart(header.ihPref))

        function createService() {
            return DeleteCouponService(
                anonymousToken,
                checkoutApi,
                header,
                couponCode
            )
        }
    }
    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})