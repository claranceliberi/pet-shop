import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as ProductCard from "./SProductCard.vue"

describe("ProductCard", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(ProductCard)
        expect(wrapper.vm).toBeTruthy()
    })
})
