import redux from "iherb-redux"
import co from "co"

var actionTypes = redux.workflowCart.actionTypes
var actions = redux.workflowCart.actions

export const GetCountryListHandler = props => store => next => action => co(function*(){
    const {
        GetCountryListService
    } = props

    next(action)

    if(action.type !== actionTypes.LOAD_COUNTRY_LIST) return

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

        console.log('config inside get country list: ', config)

        const service = createService()
        const {data} = yield service()
        store.dispatch(actions.putCountryList(data.locale.countryList))

        function createService() {
            return GetCountryListService(
                anonymousToken,
                myAccountApi,
                country,
                currency,
                language, 
                header
            )
        }
    }
    catch(error) {
        store.dispatch(actions.errorThrown(error))
    }
})