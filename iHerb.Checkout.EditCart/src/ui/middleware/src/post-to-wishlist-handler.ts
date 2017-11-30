import { workflowCart } from "iherb-redux"
import co from "co"

var actionTypes = workflowCart.actionTypes
var actions = workflowCart.actions

export const PostToWishlistHandler = props => store => next => action => co(function*(){
    const {
        PostToWishListService
    } = props

    next(action)

    if(action.type !== actionTypes.POST_TO_WISHLIST) return

    try {
        const {productId} = action.payload
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

        function createService() {
            if(!loginToken) {
                document.cookie = `ihr-lac=rturl=${location.href};domain=${location.host.match(/\.[^$]+/)[0]}`;
                console.log(document.cookie)
                location.href = '/account/login';
            } else {
                return PostToWishListService(
                    loginToken,
                    myAccountApi,
                    productId.productId
                )
            }
        }
    }
    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})