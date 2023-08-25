<script lang="ts" setup>
import LoginForm from "@/components/organisms/LoginForm"
import type { LoginPayload } from "@/components/organisms/LoginForm"

const visible = ref(false)

function onLogin(payload: LoginPayload) {
    visible.value = false

    console.log(payload)
}
</script>

<template>
    <div>
        <Navbar>
            <template #actionButtons>
                <span class="space-x-4">
                    <Button outlined label="Cart (0)" icon="pi pi-shopping-cart" appearance="white" />
                    <Button outlined label="Login" appearance="white" @click="visible = true" />
                </span>
            </template>
        </Navbar>
        <div>
            <slot />
        </div>
        <Footer />
        <PDialog v-model:visible="visible" modal :style="{ width: '40rem' }">
            <LoginForm @login="onLogin" />
        </PDialog>
    </div>
</template>
