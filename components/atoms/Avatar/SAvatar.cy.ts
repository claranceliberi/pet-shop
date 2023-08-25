import SAvatar from "./SAvatar.vue"

describe("<SAvatar />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SAvatar)
    })
})
