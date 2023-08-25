<template>
    <div class="bg-primary/10 flex justify-center">
        <div class="flex py-16 space-x-10">
            <div class="flex items-center"><Logo alignment="vertical" /></div>
            <div>
                <h2 class="font-bold text-lg">Petson</h2>
                <ul class="space-y-2">
                    <li class="text-slate-400"><NuxtLink to="#">About us</NuxtLink></li>
                    <li class="text-slate-400"><NuxtLink to="#">Blog</NuxtLink></li>
                    <li class="text-slate-400"><NuxtLink to="#">Store locator</NuxtLink></li>
                </ul>
            </div>
            <div>
                <h2 class="font-bold text-lg">Contact</h2>
                <ul class="space-y-2">
                    <li class="text-slate-400"><NuxtLink to="mail-to:contact@petson.com">contact@petson.com</NuxtLink></li>
                    <li class="text-slate-400"><NuxtLink to="#">+385 000 000</NuxtLink></li>
                    <li class="text-slate-400"><NuxtLink to="#">35 Shnauzer avenue, Dogville AL</NuxtLink></li>
                </ul>
            </div>
            <div>
                <h2 class="font-bold text-lg">Information</h2>
                <ul class="space-y-2">
                    <li class="text-slate-400"><NuxtLink to="#">Ordering and shipping</NuxtLink></li>
                    <li class="text-slate-400"><NuxtLink to="#">FAQ</NuxtLink></li>
                    <li class="text-slate-400"><NuxtLink to="#">GDPR statement</NuxtLink></li>
                </ul>
            </div>

            <div class="flex items-center">
                <p class="w-[15rem] text-slate-400">If you can’t find answer to your question, please contact our, <a href="" class="text-blue-300">customer service</a></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FooterProps } from "./SFooter.types"
import Logo from "../../atoms/Logo"

const props = withDefaults(defineProps<FooterProps>(), {
    appearance: "primary",
})
</script>
