<template>
    <span class="p-float-label">
        <PInputText id="username" v-model="value" :unstyled="false" :pt="{}" />
        <label for="username">Username</label>
    </span>
</template>

<script setup lang="ts">
import type { InputProps } from "./SInput.types"
import { computed, ref } from "vue"

const props = withDefaults(defineProps<InputProps>(), {
    appearance: "primary",
})

const value = ref("")

const styles = computed(() => {
    let s = ""

    if (props.appearance == "primary") s += ` bg-primary text-white py-2 px-6`
    else if (props.appearance == "secondary") s += ` bg-white text-black py-2 px-6`
    else if (props.appearance == "text") s += ` `

    return s
})
</script>

<style lang="scss"></style>
