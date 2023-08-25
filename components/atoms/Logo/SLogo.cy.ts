import SLogo from "./SLogo.vue"

describe("<SLogo />", () => {
    it("should render with default primary color", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SLogo)

        cy.get("svg").should("be.visible")
    })
})
