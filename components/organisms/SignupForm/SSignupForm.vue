<script setup lang="ts">
import Logo from "../../atoms/Logo"
import { SignupPayload, SignupFormProps } from "./SSignupForm.types"

const form = reactive<SignupPayload>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_marketing: false,
    address: "",
    avatar: "string",
    phone_number: "",
})

const props = defineProps<SignupFormProps>()

const emit = defineEmits<{
    signup: [payload: SignupPayload]
    login?: []
}>()

function signup() {
    emit("signup", form)
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
            <div class="space-y-6 pt-6">
                <div class="flex space-x-4">
                    <Input v-model="form.first_name" class="w-full" label="First Name" />
                    <Input v-model="form.last_name" class="w-full" label="Second Name" />
                </div>
                <Input v-model="form.email" class="w-full" label="Email" />
                <Input v-model="form.password" class="w-full" label="Password" />
                <Input v-model="form.password_confirmation" class="w-full" label="Confirm Password" />

                <div class="flex space-x-4"><PCheckbox v-model="form.is_marketing" :binary="true" /> <label> I want to receive inspiration, marketing promotions and updates via email. </label></div>

                <Button class="w-full" label="Sign  up" @click="signup" />

                <div class="flex justify-between">
                    <div><span class="text-blue-400 cursor-pointer" @click="$emit('login')">Already have an account? Log in</span></div>
                </div>
            </div>

            <div v-if="props.error" class="py-4">
                <PMessage severity="error"><div v-html="props.error"></div></PMessage>
            </div>
        </div>
    </div>
</template>
