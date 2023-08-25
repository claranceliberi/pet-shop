import { useAuthStore } from "@/store"

export function useAuth() {
    const authStore = useAuthStore()
    const router = useRouter()
    const isAuth = computed(() => authStore.isAuthenticated)

    function logout() {
        authStore.logout()
        router.push("/")
    }

    return {
        logout,
        isAuth,
    }
}
