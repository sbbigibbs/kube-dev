import {connectAdvanced} from "react-redux"
import selectorFactory from "./CartItems"
import Components from "iherb-components"

var items = Components.CartItems;
var selectors = selectorFactory;

export default connectAdvanced(selectorFactory)(Components.CartItems)
