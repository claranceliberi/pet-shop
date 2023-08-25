<template>
    <span :class="styles">
        <i :class="props.icon" />
        <PInputText :id="props.id" v-model="value" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <label :for="props.id">{{ props.label }}</label>
    </span>
</template>

<script setup lang="ts">
import type { InputProps } from "./SInput.types"
import { computed, ref } from "vue"

const props = withDefaults(defineProps<InputProps>(), {
    label: "primary",
})

const value = ref("")

defineEmits(["update:modelValue"])

const styles = computed(() => {
    let s = " p-float-label"

    if (props.icon) {
        if (props.iconPosition == "left" || !props.iconPosition) {
            s += " p-input-icon-left"
        }

        if (props.iconPosition == "right") {
            s += " p-input-icon-right"
        }
    }

    return s
})
</script>

<style lang="scss"></style>
