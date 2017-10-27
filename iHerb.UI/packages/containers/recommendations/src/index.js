import {connectAdvanced} from "react-redux"
import {createSelector} from "reselect"
import Recommendations from "@iherb/ui-component-recommendations"
import {workflowCart, config} from "@iherb/ui-selector-root"
import {actions} from "@iherb/ui-redux-workflow-cart"
import {toJS} from "immutable"
import Translator from "@iherb/ui-translations-cart"

const selectors = [
    workflowCart
]

export const selectorFactory = dispatch => createSelector(selectors, (...args) => {
    const [
        workflowCart
    ] = args
    
    const recList = workflowCart.get("recommendationList").prodList
    
    return {
        recList
    }
})

export default connectAdvanced(selectorFactory)(Recommendations)
