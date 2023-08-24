import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as Input from "./SInput.vue"

describe("Input", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(Input)
        expect(wrapper.vm).toBeTruthy()
    })
})
