import { Meta, StoryFn } from "@storybook/vue3"
import ProductCard from "./SProductCard.vue"

const meta: Meta<typeof ProductCard> = {
    title: "atoms/ProductCard",
    component: ProductCard,
    argTypes: {
        appearance: {
            options: ["primary", "secondary"],
            control: "select",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        default: {
            control: "text",
            description: "Slot content",
            table: {
                type: { summary: "text" },
            },
        },
    },
}

export default meta

const Template: StoryFn = (args) => ({
    components: { ProductCard },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <ProductCard v-bind="args" >  </ProductCard>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "ProductCard",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { ProductCard },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <ProductCard width="full" > input text </ProductCard>  </div>
            <div style="margin:1rem 0.5rem"> <ProductCard width="full" appearance="secondary" > sample text </ProductCard>  </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
