import "primeicons/primeicons.css"
import "../../assets/css/theme.css"
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Avatar from "primevue/avatar"
import Dialog from "primevue/dialog"
import Checkbox from "primevue/checkbox"
import Message from "primevue/message"

import { App } from "vue"

export function registerPrimeVue(app: App) {
    app.use(PrimeVue, { ripple: true })
    app.component("PButton", Button)
    app.component("PInputText", InputText)
    app.component("PAvatar", Avatar)
    app.component("PDialog", Dialog)
    app.component("PCheckbox", Checkbox)
    app.component("PMessage", Message)
}
