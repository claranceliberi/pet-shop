import SAvatar from "./SAvatar.vue"

describe("<SAvatar />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(SAvatar, {
            props: {
                src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            },
        })
    })

    it("is mounted with img", () => {
        cy.mount(SAvatar, {
            props: {
                src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            },
        })

        cy.get("img")
            .should("be.visible")
            .and((img) => {
                // Ensure the natural width is not 0, which indicates the image was loaded
                expect(img[0].naturalWidth).to.be.greaterThan(0)
            })
    })
})
