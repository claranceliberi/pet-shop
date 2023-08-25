import SNavbar from "./SNavbar.vue"

describe("<SNavbar />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SNavbar)
    })
})
