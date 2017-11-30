import { workflowCart } from "iherb-redux"
import co from "co"

var actionTypes = workflowCart.actionTypes
var actions = workflowCart.actions

export const ApplyCouponCodeHandler = props => store => next => action => co(function*(){
    const {
        ApplyCouponCodeService
    } = props

    next(action)

    if(action.type !== actionTypes.APPLY_COUPONCODE) return

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

        const couponData = yield service()
        
        if(couponData.data.errMsg) 
            store.dispatch(actions.getPromoError(couponData.data.errMsg))
        else 
            store.dispatch(actions.clearPromoError())
        
        store.dispatch(actions.refreshShoppingCart(header.ihPref))

        function createService() {
            return ApplyCouponCodeService(
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