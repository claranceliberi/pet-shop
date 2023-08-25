import SButton from "./SButton.vue"

describe("<SButton />", () => {
    it("should have label", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SButton, {
            props: {
                label: "Test Button",
            },
        })

        cy.get("button").should("be.visible").and("contain", "Test Button")
    })

    it('should display Icon when "icon" prop is passed', () => {
        cy.mount(SButton, {
            props: {
                icon: "pi pi-check",
            },
        })

        cy.get("span.pi-check.p-button-icon").should("be.visible")
    })
})
