import { workflowCart } from "iherb-redux"
import co from "co"

var actionTypes = workflowCart.actionTypes
var actions = workflowCart.actions

export const GetWishlistHandler = props => store => next => action => co(function*(){
    const {
        GetWishListService
    } = props

    next(action)

    if(action.type !== actionTypes.GET_WISHLIST || action.type !== actionTypes.SELECT_WISHLIST) return

    try {
        const {folderName} = action.payload
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

        store.dispatch(actions.loadWishlist(data))

        function createService() {
            return GetWishListService(
                loginToken,
                myAccountApi,
                header,
                folderName
            )
        }
    }
    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})