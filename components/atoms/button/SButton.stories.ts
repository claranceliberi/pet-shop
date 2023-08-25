// Button.stories.ts
import { Meta, StoryFn } from "@storybook/vue3"
import Button from "./SButton.vue"

const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        appearance: {
            options: ["primary", "secondary", "white"],
            control: "select",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        icon: {
            control: "string",
            table: {
                type: { summary: "string" },
            },
        },
        iconPosition: {
            options: ["right", "left"],
            control: "radio",
            defaultValue: "left",
            table: {
                type: { summary: "radio" },
            },
        },
        outlined: {
            control: "boolean",
            defaultValue: false,
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

const ExampleTemplate: StoryFn = (args) => ({
    components: { Button },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Button > button </Button>  </div>
            <div style="margin:1rem 0.5rem"> <Button appearance="white" > button </Button>  </div>
            <div style="margin:1rem 0.5rem;">
                <Button style="margin:1rem 0.5rem;" outlined  icon="pi pi-check" label="Button" />
                <Button style="margin:1rem 0.5rem;" outlined > button </Button>
                <Button style="margin:1rem 0.5rem;" outlined appearance="white" > button </Button>
            </div>

        </div>
    `,
})

export const Example = ExampleTemplate.bind({})
