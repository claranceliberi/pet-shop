<template>
    <PButton>
        <slot />
    </PButton>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./SButton.types"
import { computed } from "vue"

const props = withDefaults(defineProps<ButtonProps>(), {
    appearance: "primary",
    width: "content",
    rounded: "full",
})
</script>
