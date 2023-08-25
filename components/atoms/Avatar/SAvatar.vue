<template>
    <PAvatar data-testid="avatar" :image="props.src" class="mr-2 border border-white" size="large" shape="circle" />
</template>

<script setup lang="ts">
import type { AvatarProps } from "./SAvatar.types"

const props = defineProps<AvatarProps>()
</script>
