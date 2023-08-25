import { Meta, StoryFn } from "@storybook/vue3"
import Footer from "./SFooter.vue"

const meta: Meta<typeof Footer> = {
    title: "molecules/Footer",
    component: Footer,
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
    components: { Footer },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Footer v-bind="args" >  </Footer>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Footer",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { Footer },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Footer width="full" > input text </Footer>  </div>
            <div style="margin:1rem 0.5rem"> <Footer width="full" appearance="secondary" > sample text </Footer>  </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
