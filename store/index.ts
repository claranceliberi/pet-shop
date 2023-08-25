import { defineStore } from "pinia"
import { UserData } from "@/services/types"
import { getUser } from "@/services/user"
import { LocalStorageManager as lm } from "@/utils/localStorage"

interface State {
    user: UserData | null
    token: string | null
}

export const useAuthStore = defineStore("auth", {
    state: (): State => ({
        user: null,
        token: null,
    }),
    actions: {
        async authenticate(token: string, user?: UserData) {
            lm.set("token", token) // store token in cookie
            this.token = token

            if (user) {
                this.user = user

                return new Promise((resolve) => resolve(user))
            } else {
                // if user is not provided, fetch it from API
                let retries = 0
                const maxRetries = 3
                let success = false

                // retry 3 times to get user data
                while (!success && retries < maxRetries) {
                    try {
                        // we expect that the user is already logged in, and token is stored in cookie
                        this.user = (await getUser()).data
                        success = true
                        return new Promise((resolve) => resolve(this.user))
                    } catch (e) {
                        console.log(e)
                    }
                    await new Promise((resolve) => setTimeout(resolve, 500))
                    retries++
                }
            }
        },
        async logout() {
            lm.delete("token")
            this.token = null
            this.user = null
        },
    },
})
