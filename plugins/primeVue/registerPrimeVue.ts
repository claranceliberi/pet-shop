import PrimeVue from "primevue/config"
import Button from "primevue/button"
import InputText from "primevue/inputtext"

import { App } from "vue"

export function registerPrimeVue(app: App) {
    app.use(PrimeVue)
    app.component("PButton", Button)
    app.component("PInputText", InputText)
}
