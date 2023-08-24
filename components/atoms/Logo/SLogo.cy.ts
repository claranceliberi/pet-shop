import SLogo from "./SLogo.vue"

describe("<SLogo />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SLogo)
    })
})
