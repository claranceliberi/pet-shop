<script lang="ts" setup>
import { useAuthStore } from "@/store"

const authStore = useAuthStore()

onMounted(() => {
    authStore.getAuthUser()
})

// export default {}
</script>

<template>
    <NuxtLayout> <NuxtPage /> </NuxtLayout>
</template>
