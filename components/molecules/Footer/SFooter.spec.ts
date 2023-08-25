import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as Footer from "./SFooter.vue"

describe("Footer", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(Footer)
        expect(wrapper.vm).toBeTruthy()
    })
})
