import { Meta, StoryFn } from "@storybook/vue3"
import Avatar from "./SAvatar.vue"

const meta: Meta<typeof Avatar> = {
    title: "atoms/Avatar",
    component: Avatar,
    argTypes: {
        src: {
            control: "text",
            defaultValue:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
            table: {
                type: { summary: "text" },
            },
        },
    },
}

export default meta

const Template: StoryFn = (args) => ({
    components: { Avatar },
    setup() {
        return { args }
    },
    template: `
        <div style="background-color:#f7f7f7;padding:1rem 2rem">
            <Avatar v-bind="args" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60">  </Avatar>
        </div>
    `,
})

export const Primary = Template.bind({})

Template.args = {
    src: "",
}
