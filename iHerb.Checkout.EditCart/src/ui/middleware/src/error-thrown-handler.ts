import redux from "iherb-redux"
import co from "co"

var actionTypes = redux.workflowCart.actionTypes
var actions = redux.workflowCart.actions

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