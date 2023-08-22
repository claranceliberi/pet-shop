import PrimeVue from "primevue/config"
import Button from "primevue/button"
import { App } from "vue"

export function registerPrimeVue(app: App) {
    app.use(PrimeVue, { ripple: true })
    app.component("PButton", Button)
}
