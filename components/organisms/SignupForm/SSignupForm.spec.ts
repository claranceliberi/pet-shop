import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"

import * as SignupForm from "./SSignupForm.vue"

describe("SignupForm", () => {
    it("is a Vue instance", () => {
        const wrapper = mount(SignupForm)
        expect(wrapper.vm).toBeTruthy()
    })
})
