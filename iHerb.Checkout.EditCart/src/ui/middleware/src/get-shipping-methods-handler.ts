import { workflowCart } from "iherb-redux"
import co from "co"

var actionTypes = workflowCart.actionTypes
var actions = workflowCart.actions

export const GetShippingMethodsHandler = props => store => next => action => co(function*(){
    const {
        GetShippingMethodsService
    } = props

    next(action)

    if(action.type !== actionTypes.GET_SHIPPING_METHODS) return

    try {
        const zipcode = action.payload.zipcode
        const countryCode = action.payload.countryCode
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
        console.log('service: ', service)
        const response = yield service()
        
        store.dispatch(actions.updateShippingMethods({
            shippingMethods: response.data.smList.shipMethodList,
            weight: response.data.smList.shipWeightLbs
        }))

        function createService() {
            console.log('inside createService of ship metho')
            return GetShippingMethodsService(
                anonymousToken,
                loginToken,
                checkoutApi,
                header,
                zipcode,
                countryCode
            )
        }
    }
    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})