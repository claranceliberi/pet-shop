import { Meta, StoryFn } from "@storybook/vue3"
import Sidebar from "./SSidebar.vue"

const meta: Meta<typeof Sidebar> = {
    title: "molecules/Sidebar",
    component: Sidebar,
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
    components: { Sidebar },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Sidebar v-bind="args" >  </Sidebar>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Sidebar",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { Sidebar },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Sidebar width="full" > input text </Sidebar>  </div>
            <div style="margin:1rem 0.5rem"> <Sidebar width="full" appearance="secondary" > sample text </Sidebar>  </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
