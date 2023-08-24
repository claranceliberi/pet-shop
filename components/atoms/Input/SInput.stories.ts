import { Meta, StoryFn } from "@storybook/vue3"
import Input from "./SInput.vue"

const meta: Meta<typeof Input> = {
    title: "atoms/Input",
    component: Input,
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
    components: { Input },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Input v-bind="args" >  </Input>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "Input",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { Input },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Input width="full" > input text </Input>  </div>
            <div style="margin:1rem 0.5rem"> <Input width="full" appearance="secondary" > sample text </Input>  </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
