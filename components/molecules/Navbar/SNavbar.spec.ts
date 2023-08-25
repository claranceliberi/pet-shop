import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as Navbar from "./SNavbar.vue"

describe("Navbar", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(Navbar)
        expect(wrapper.vm).toBeTruthy()
    })
})
