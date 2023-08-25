import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as Sidebar from "./SSidebar.vue"

describe("Sidebar", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(Sidebar)
        expect(wrapper.vm).toBeTruthy()
    })
})
