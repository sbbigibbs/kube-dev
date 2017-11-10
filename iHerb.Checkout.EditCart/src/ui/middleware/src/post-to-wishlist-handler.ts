import redux from "iherb-redux"
import co from "co"

var actionTypes = redux.workflowCart.actionTypes
var actions = redux.workflowCart.actions

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
                document.cookie = document.cookie.match(/ihr-lac/) ? 
                    document.cookie.replace(/ihr-lac[^;]/, `ihr-lac=rturl=${location.href}`) :
                    document.cookie + `;ihr-lac=rturl=${location.href}`;
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