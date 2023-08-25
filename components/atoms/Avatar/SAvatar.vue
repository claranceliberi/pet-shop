<template>
    <PAvatar :image="src" class="mr-2" size="large" shape="circle" />
</template>

<script setup lang="ts">
import type { AvatarProps } from "./SAvatar.types"

defineProps<AvatarProps>()
</script>
