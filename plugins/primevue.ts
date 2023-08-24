import { defineNuxtPlugin } from "#app"
import { registerPrimeVue } from "./primeVue/registerPrimeVue"

export default defineNuxtPlugin((nuxtApp) => {
    registerPrimeVue(nuxtApp.vueApp)
    //other components that you need
})
