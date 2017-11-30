import { workflowCart } from "iherb-redux"
import co from "co"

var actionTypes = workflowCart.actionTypes
var actions = workflowCart.actions

export const ErrorThrownHandler = props => store => next => action => co(function*(){
    next(action)

    if(action.type !== actionTypes.ERROR_THROWN) return

    try {
        console.log(action.payload.error)
    }
    catch(error) {
        console.log(error)
    }
})