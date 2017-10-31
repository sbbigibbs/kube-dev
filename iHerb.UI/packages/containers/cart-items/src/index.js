import {connectAdvanced} from "react-redux"
import selectorFactory from "./selector-factory"
import CartItems from "@iherb/ui-component-cart-items"

export default connectAdvanced(selectorFactory)(CartItems)