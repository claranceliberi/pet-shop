<script lang="ts" setup>
import LoginForm from "@/components/organisms/LoginForm"
import type { LoginPayload } from "@/components/organisms/LoginForm"

import { login, createUser } from "@/services/user"
import { AccountCreationData } from "@/services/types"
import { useAuthStore } from "@/store/index"

const authStore = useAuthStore()

const isLoginVisible = ref(false)
const isSignupVisible = ref(false)
const errors = reactive({
    login: "",
    signup: "",
})

async function onLogin({ email, password }: LoginPayload) {
    // isLoginVisible.value = false
    await authStore.logout()

    login(email, password)
        .then((res) => {
            const token = res.data.token
            authStore.authenticate(token)
        })
        .catch((err) => {
            const e = err.response.data
            Object.values(e.errors)
                .map((error) => `<li>${error}</li>`)
                .join("\n")
        })
}

async function signUp(payload: AccountCreationData) {
    // isSignupVisible.value = false
    createUser(payload)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            const e = err.response.data
            errors.signup = Object.values(e.errors)
                .map((error) => `<li>${error}</li>`)
                .join("\n")
        })
}

function handleSignupFromLoginModel() {
    isLoginVisible.value = false
    isSignupVisible.value = true
}

function handleLoginFromSignupModel() {
    isSignupVisible.value = false
    isLoginVisible.value = true
}
</script>

<template>
    <div>
        <Navbar>
            <template #actionButtons>
                <span class="space-x-4">
                    <Button outlined label="Cart (0)" icon="pi pi-shopping-cart" appearance="white" />
                    <Button outlined label="Login" appearance="white" @click="isLoginVisible = true" />
                </span>
            </template>
        </Navbar>
        <div>
            <slot />
        </div>
        <Footer />
        <PDialog v-model:visible="isLoginVisible" modal :style="{ width: '40rem' }">
            <LoginForm :error="errors.login" @login="onLogin" @signup="handleSignupFromLoginModel" />
        </PDialog>
        <PDialog v-model:visible="isSignupVisible" modal :style="{ width: '40rem' }">
            <SignupForm :error="errors.signup" @signup="signUp" @login="handleLoginFromSignupModel" />
        </PDialog>
    </div>
</template>
