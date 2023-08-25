import { Meta, StoryFn } from "@storybook/vue3"
import SignupForm from "./SSignupForm.vue"

const meta: Meta<typeof SignupForm> = {
    title: "organisms/SignupForm",
    component: SignupForm,
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
    components: { SignupForm },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <SignupForm v-bind="args" >  </SignupForm>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "SignupForm",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { SignupForm },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <SignupForm width="full" > input text </SignupForm>  </div>
            <div style="margin:1rem 0.5rem"> <SignupForm width="full" appearance="secondary" > sample text </SignupForm>  </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
