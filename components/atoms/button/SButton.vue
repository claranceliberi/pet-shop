<template>
    <PButton :label="props.label" :icon-pos="props.iconPosition" :text="props.text" :icon="props.icon" :outlined="props.outlined" :disabled="props.disabled" :loading="props.loading" :class="style">
        <slot />
    </PButton>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./SButton.types"
import { computed } from "vue"

const props = withDefaults(defineProps<ButtonProps>(), {
    appearance: "primary",
    iconPosition: "left",
    icon: "",
    outlined: false,
    disabled: false,
    loading: false,
    text: false,
})

const style = computed(() => {
    let s = ""

    if (!props.outlined) {
        if (props.appearance == "white") s += ` bg-white text-black py-2 px-6`
    } else {
        if (props.appearance == "white") s += ` !bg-transparent !text-white py-2 px-6`

        if (!props.text) s += ` !border !border-white`
    }

    return s
})
</script>
