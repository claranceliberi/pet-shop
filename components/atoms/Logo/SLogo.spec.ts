import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as Logo from "./SLogo.vue"

describe("Logo", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(Logo)
        expect(wrapper.vm).toBeTruthy()
    })
})
