import SInput from "./SInput.vue"

describe("<SInput />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SInput)
    })
})
