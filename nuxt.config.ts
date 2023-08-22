// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["vite-plugin-vue-type-imports/nuxt", "@nuxthq/ui", "@pinia/nuxt"],
    css: ["primevue/resources/themes/lara-light-blue/theme.css"],
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

    vuetify: {
        moduleOptions: {
            /* nuxt-vuetify module options */
            treeshaking: true,
            useIconCDN: true,

            /* vite-plugin-vuetify options */
            styles: true,
            autoImport: true,
            useVuetifyLabs: true,
        },
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

    ui: {
        global: true,
        icons: ["heroicons", "simple-icons"],
    },

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
