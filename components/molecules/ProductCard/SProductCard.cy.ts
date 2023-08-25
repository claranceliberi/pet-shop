import SProductCard from "./SProductCard.vue"

describe("<SProductCard />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SProductCard)
    })
})
