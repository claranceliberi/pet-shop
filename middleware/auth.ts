import { LocalStorageManager as lm } from "@/utils/localStorage"

export default defineNuxtRouteMiddleware((to, from) => {
    if (lm.get("token") == null) {
        return navigateTo("/")
    }
})
