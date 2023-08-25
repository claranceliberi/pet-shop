import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as Avatar from "./SAvatar.vue"

describe("Avatar", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(Avatar)
        expect(wrapper.vm).toBeTruthy()
    })
})
