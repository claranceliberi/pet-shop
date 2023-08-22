import { defineNuxtPlugin } from "#app"
import { registerPrimeVue } from "./registerPrimeVue"

export default defineNuxtPlugin((nuxtApp) => {
    registerPrimeVue(nuxtApp.vueApp)
    //other components that you need
})
