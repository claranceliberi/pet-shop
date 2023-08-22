/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.vue", "./pages/**/*.vue", "./layouts/**/*.vue", "./plugins/**/*.js", "./nuxt.config.js", "./App.vue"],
    theme: {
        extend: {
            colors: {
                primary: "#4EC690",
            },
        },
    },
    plugins: [],
}
