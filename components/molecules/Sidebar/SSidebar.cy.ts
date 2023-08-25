import SSidebar from "./SSidebar.vue"

describe("<SSidebar />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SSidebar)
    })
})
