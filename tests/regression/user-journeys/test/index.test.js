import React from "react"
import {createSnapshot} from "@iherb/ui-tool-snapshot-creator"
import desktopActions from "./desktop"
import japaneseCartUnavailable from "../japanese-cart-unavailable-item/index"
import koreanCartQty from "../korean-cart-with-quantity-error/index"
import americanCartPromo from "../american-cart-add-remove-promo/index"
import japaneseWeightRules from "../japanese-cart-weight-rules/index"
import australiaShipping from "../australian-cart-change-carrier/index"
import australiaRewards from "../australian-cart-order-level-discounts/index"

console.error = () => {}

describe("Enforce Japan Restricted Item Rules", () => {
    it("Invalid Cart Loaded", () => {
        const snapshot = createSnapshot(japaneseCartUnavailable.InvalidCart)
        expect(snapshot).toMatchSnapshot()
    })
    it("Invalid Item Added to Wish List", () => {
        const snapshot = createSnapshot(japaneseCartUnavailable.AddWishList)
        expect(snapshot).toMatchSnapshot()
    })
    it("Invalid Item Removed from Cart", () => {
        const snapshot = createSnapshot(japaneseCartUnavailable.RemoveUnavailableItem)
        expect(snapshot).toMatchSnapshot()
    })
})

describe("Enforce Korea Quantity/Type Limit Rules", () => {
    it("Invalid Cart Loaded (2 Item)", () => {
        const snapshot = createSnapshot(koreanCartQty.InvalidCart)
        expect(snapshot).toMatchSnapshot()
    })
    it("Quantity Changed to Valid State", () => {
        const snapshot = createSnapshot(koreanCartQty.ChangeQtyValid)
        expect(snapshot).toMatchSnapshot()
    })
    it("Quantity Changed to Invalid State", () => {
        const snapshot = createSnapshot(koreanCartQty.ChangeQtyInvalid)
        expect(snapshot).toMatchSnapshot()
    })
    it("Invalid Item Deleted (Valid Cart)", () => {
        const snapshot = createSnapshot(koreanCartQty.RemoveInvalid)
        expect(snapshot).toMatchSnapshot()
    })
})

describe("American cart add and remove promotion code", () => {
    it("Load valid American cart", () => {
        const snapshot = createSnapshot(americanCartPromo.ValidCart)
        expect(snapshot).toMatchSnapshot()
    })
    it("Adds promo code to cart successfully", () => {
        const snapshot = createSnapshot(americanCartPromo.AddPromo)
        expect(snapshot).toMatchSnapshot()
    })
    it("Removes promo code from cart successfully", () => {
        const snapshot = createSnapshot(americanCartPromo.RemovePromo)
        expect(snapshot).toMatchSnapshot()
    })
})

describe("Enforce Japan Weight Restriction Rules", () => {
    it("Invalid Cart Loaded", () => {
        const snapshot = createSnapshot(japaneseWeightRules.InvalidCart)
        expect(snapshot).toMatchSnapshot()
    }),
    it("Shipping Calculated", () => {
        const snapshot = createSnapshot(japaneseWeightRules.ShippingCalculated)
        expect(snapshot).toMatchSnapshot()
    })
    it("Quantity Changed to Valid State", () => {
        const snapshot = createSnapshot(japaneseWeightRules.QtyValid)
        expect(snapshot).toMatchSnapshot()
    })
    it("Shipping Recalculated", () => {
        const snapshot = createSnapshot(japaneseWeightRules.ShippingRecalculated)
        expect(snapshot).toMatchSnapshot()
    })
})

describe("Change Carrier", () => {
    it("Load Australian cart", () => {
        const snapshot = createSnapshot(australiaShipping.AusCart)
        expect(snapshot).toMatchSnapshot()
    })
    it("Calculate shipping methods", () => {
        const snapshot = createSnapshot(australiaShipping.CalcShipping)
        expect(snapshot).toMatchSnapshot()
    })
    it("Select shipping carrier", () => {
        const snapshot = createSnapshot(australiaShipping.SelectShipping)
        expect(snapshot).toMatchSnapshot()
    })
    it("Change shipping carrier", () => {
        const snapshot = createSnapshot(australiaShipping.ChangeShipping)
        expect(snapshot).toMatchSnapshot()
    })
})

describe("Display Order Level Discounts", () => {
    it("Load Australian cart with loyalty credits", () => {
        const snapshot = createSnapshot(australiaRewards.AusCart)
        expect(snapshot).toMatchSnapshot()
    })
    it("Promo Code displayed", () => {
        const snapshot = createSnapshot(australiaRewards.AusCartPromo)
        expect(snapshot).toMatchSnapshot()
    })
    it("Reward Code displayed", () => {
        const snapshot = createSnapshot(australiaRewards.AusCartRewards)
        expect(snapshot).toMatchSnapshot()
    })
})