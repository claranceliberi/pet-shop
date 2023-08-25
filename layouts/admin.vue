<script lang="ts" setup>
import { Link } from "@/components/molecules/Sidebar"

const links: Link[] = [
    { label: "Dashboard", onClick: () => console.log("clicked"), icon: "pi-sliders-h" },
    { label: "Shipment Locator", onClick: () => console.log("clicked"), icon: "pi-flag" },
    { label: "All tickets", onClick: () => console.log("clicked"), icon: "pi-tags" },
    { label: "Customers", onClick: () => console.log("clicked"), icon: "pi-users" },
    { label: "Products", onClick: () => console.log("clicked"), icon: "pi-inbox" },
]

const { isAuth, logout } = useAuth()
</script>

<template>
    <main class="h-[100vh]">
        <Navbar :avatar="isAuth">
            <template #actionButtons>
                <span class="space-x-4">
                    <Button outlined label="Cart (0)" icon="pi pi-shopping-cart" appearance="white" />
                    <Button v-if="!isAuth" outlined label="Login" appearance="white" @click="true" />
                    <Button v-else outlined label="Logout" appearance="white" @click="logout" />
                </span>
            </template>
        </Navbar>
        <section class="flex h-full">
            <aside>
                <Sidebar :links="links" />
            </aside>
            <article class="flex-1">
                <slot />
            </article>
        </section>
    </main>
</template>
