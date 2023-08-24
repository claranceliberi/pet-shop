import PrimeVue from "primevue/config"
import Button from "primevue/button"
import InputText from "primevue/inputtext"

import TailwindPassThrough from "primevue/passthrough/tailwind"
import { App } from "vue"

type TailwindType = typeof TailwindPassThrough

export function registerPrimeVue(app: App) {
    const Tailwind = removeUnwantedStyles(["button"])

    app.use(PrimeVue, { unstyled: true, pt: Tailwind })
    app.component("PButton", Button)
    app.component("PInputText", InputText)
}

// remove styles which are colliding with my custom styles
function removeUnwantedStyles(elements: (keyof TailwindType)[]) {
    elements.forEach((element) => {
        delete TailwindPassThrough[element]
    })

    return TailwindPassThrough
}
