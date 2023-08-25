<script setup lang="ts">
import type { LoginPayload, LoginFormProps } from "./SLoginForm.types"
import Logo from "../../atoms/Logo"

const form = reactive({
    email: "",
    password: "",
    rememberMe: false,
})

const props = defineProps<LoginFormProps>()

const emit = defineEmits<{
    login: [payload: LoginPayload]
    forgot?: []
    signup?: []
}>()

function login() {
    emit("login", form)
}
</script>

<template>
    <div>
        <div class="w-[24rem] m-auto">
            <div class="flex flex-col items-center space-y-4">
                <div class="bg-primary w-[7rem] h-[7rem] flex items-center justify-center rounded-full">
                    <Logo alignment="vertical" appearance="white" />
                </div>

                <h1 class="text-3xl">Log In</h1>
            </div>
            <div class="space-y-10 pt-6">
                <Input v-model="form.email" class="w-full" label="Email" />
                <Input v-model="form.password" class="w-full" label="Password" />

                <div class="flex space-x-4"><PCheckbox v-model="form.rememberMe" :binary="true" label="Remember me" /> <label> Remember Me </label></div>

                <Button class="w-full" label="Log In" @click="login" />

                <div class="flex justify-between">
                    <div><span class="text-blue-400 cursor-pointer" @click="$emit('forgot')">Forgot Password?</span></div>
                    <div><span class="text-blue-400 cursor-pointer" @click="$emit('signup')">Don't have an account? Signup </span></div>
                </div>
            </div>
            <div v-if="props.error" class="py-4">
                <PMessage severity="error"><div v-html="props.error"></div></PMessage>
            </div>
        </div>
    </div>
</template>
