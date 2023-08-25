<template>
    <nav class="flex justify-between px-8 bg-primary items-center">
        <NuxtLink to="/"> <Logo appearance="white" /> </NuxtLink>

        <!-- links -->
        <ul class="flex space-x-6">
            <li>
                <NuxtLink to=""><Button style="margin: 1rem 0.5rem" appearance="white" outlined text icon="pi pi-angle-down" icon-position="right" label="Products" /></NuxtLink>
            </li>
            <li>
                <NuxtLink to=""><Button style="margin: 1rem 0.5rem" appearance="white" outlined text label="Products" /></NuxtLink>
            </li>
            <li>
                <NuxtLink to=""><Button style="margin: 1rem 0.5rem" appearance="white" outlined text label="Products" /></NuxtLink>
            </li>
        </ul>

        <!-- action buttons -->
        <div class="flex space-x-4">
            <div><slot name="actionButtons" /></div>
            <div>
                <NuxtLink v-if="props.avatar" to="/admin">
                    <Avatar
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                    />
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import type { NavbarProps } from "./SNavbar.types"
import Button from "../../atoms/button"
import Logo from "../../atoms/Logo"
import Avatar from "../../atoms/Avatar"

const props = withDefaults(defineProps<NavbarProps>(), {})
</script>
