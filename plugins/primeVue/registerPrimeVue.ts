import PrimeVue from "primevue/config"
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Avatar from "primevue/avatar"
import "primeicons/primeicons.css"
import "../../assets/css/theme.css"

import { App } from "vue"

export function registerPrimeVue(app: App) {
    app.use(PrimeVue)
    app.component("PButton", Button)
    app.component("PInputText", InputText)
    app.component("PAvatar", Avatar)
}
