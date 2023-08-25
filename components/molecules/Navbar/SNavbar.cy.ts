import SNavbar from "./SNavbar.vue"

describe("<SNavbar />", () => {
    it("should render with conditional avatar", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SNavbar, {
            props: {
                avatar: false,
            },
        })

        cy.get("[data-testid='avatar']").should("not.exist")

        cy.mount(SNavbar, {
            props: {
                avatar: true,
            },
        })

        cy.get("[data-testid='avatar']").should("exist")
    })
})
