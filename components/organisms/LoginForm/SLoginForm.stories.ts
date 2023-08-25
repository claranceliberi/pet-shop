import { Meta, StoryFn } from "@storybook/vue3"
import LoginForm from "./SLoginForm.vue"

const meta: Meta<typeof LoginForm> = {
    title: "organisms/LoginForm",
    component: LoginForm,
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
    components: { LoginForm },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <LoginForm v-bind="args" >  </LoginForm>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    primary: true,
    label: "LoginForm",
}

export const Secondary = Template.bind({})

Secondary.args = {
    appearance: "secondary",
}

const ExampleTemplate: StoryFn = (args) => ({
    components: { LoginForm },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <LoginForm width="full" > input text </LoginForm>  </div>
            <div style="margin:1rem 0.5rem"> <LoginForm width="full" appearance="secondary" > sample text </LoginForm>  </div>
        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
