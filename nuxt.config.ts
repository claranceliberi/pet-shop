// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["vite-plugin-vue-type-imports/nuxt", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
    css: ["@/assets/css/theme.css"],
    app: {
        head: {
            charset: "utf-16",
            viewport: "width=500, initial-scale=1",
            title: "Nuxt App",
            meta: [{ name: "description", content: "My amazing site" }],
        },
    },
    build: {
        transpile: ["primevue"],
    },

    typescript: {
        strict: true,
    },

    components: [
        {
            path: "~~/components",
            pathPrefix: false,
        },
    ],

    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },

        vscode: {
            // startOnBoot: true,
            // enabled: true,
            mode: "tunnel",
        },
    },
    vite: {
        build: {
            rollupOptions: {
                external: ["vue", "vue-router", "vue/server-renderer"],
            },
        },
    },
})
