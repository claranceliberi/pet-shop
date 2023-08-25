import SFooter from "./SFooter.vue"

describe("<SFooter />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SFooter)
    })
})
