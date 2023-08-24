import { Meta, StoryFn } from "@storybook/vue3"
import Logo from "./SLogo.vue"

const meta: Meta<typeof Logo> = {
    title: "atoms/Logo",
    component: Logo,
    argTypes: {
        appearance: {
            options: ["primary", "white"],
            control: "select",
            defaultValue: "primary",
            table: {
                type: { summary: "select" },
            },
        },
        alignment: {
            options: ["vertical", "horizontal"],
            control: "select",
            description: "Alignment of the logo",
            table: {
                type: { summary: "select" },
            },
        },
    },
}

export default meta

const ColorsTemplate: StoryFn = (args) => ({
    components: { Logo },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Logo v-bind="args" appearance="primary" /> </div>
            <div style="margin:1rem 0.5rem"> <Logo v-bind="args" appearance="white" /> </div>
        </div>
    `,
})

export const Colors = ColorsTemplate.bind({})

const AlignmentTemplate: StoryFn = (args) => ({
    components: { Logo },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <div style="margin:1rem 0.5rem"> <Logo v-bind="args" alignment="horizontal" /> </div>
            <div style="margin:1rem 0.5rem"> <Logo v-bind="args" alignment="vertical" /> </div>
        </div>
    `,
})

export const Alignment = AlignmentTemplate.bind({})
