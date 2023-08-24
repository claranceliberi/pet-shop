/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.vue", "./pages/**/*.vue", "./layouts/**/*.vue", "./plugins/**/*.js", "./nuxt.config.js", "./App.vue", "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
            },
        },
    },
    plugins: [],
}
