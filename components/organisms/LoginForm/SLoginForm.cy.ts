import SLoginForm from "./SLoginForm.vue"

describe("<SLoginForm />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SLoginForm)
    })
})
