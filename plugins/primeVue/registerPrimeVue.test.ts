import { createApp } from "vue"
import { expect, describe, it } from "vitest"
import { registerPrimeVue } from "./registerPrimeVue"

describe("registerPrimeVue", () => {
    it("registers PrimeVue components", () => {
        const app = createApp({ template: "<div></div>" })
        registerPrimeVue(app)

        // Check if components are registered
        expect(app.component("PButton")).toBeTruthy()
        expect(app.component("PInputText")).toBeTruthy()
        expect(app.component("PAvatar")).toBeTruthy()
        expect(app.component("PDialog")).toBeTruthy()
        expect(app.component("PCheckbox")).toBeTruthy()
        expect(app.component("PMessage")).toBeTruthy()
    })
})
