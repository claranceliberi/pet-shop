import { Meta, StoryFn } from "@storybook/vue3"
import Navbar from "./SNavbar.vue"

const meta: Meta<typeof Navbar> = {
    title: "molecules/Navbar",
    component: Navbar,
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
    components: { Navbar },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Navbar v-bind="args" >  </Navbar>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Navbar",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { Navbar },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Navbar width="full" > input text </Navbar>  </div>
            <div style="margin:1rem 0.5rem"> <Navbar width="full" appearance="secondary" > sample text </Navbar>  </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
