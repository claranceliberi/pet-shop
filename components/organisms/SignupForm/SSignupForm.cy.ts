import SSignupForm from "./SSignupForm.vue"

describe("<SSignupForm />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SSignupForm)
    })
})
