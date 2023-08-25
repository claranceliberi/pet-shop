import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as LoginForm from "./SLoginForm.vue"

describe("LoginForm", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(LoginForm)
        expect(wrapper.vm).toBeTruthy()
    })
})
