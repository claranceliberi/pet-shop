<template>
    <PAvatar :image="src" class="mr-2 border border-white" size="large" shape="circle" />
</template>

<script setup lang="ts">
import type { AvatarProps } from "./SAvatar.types"

defineProps<AvatarProps>()
</script>
