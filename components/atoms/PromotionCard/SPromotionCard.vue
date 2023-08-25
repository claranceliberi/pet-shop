<template>
    <div class="w-[75rem] h-[30rem] relative">
        <img class="absolute right-0 left-0 top-0 bottom-0 -z-10" :src="props.src" :alt="`product image of ${props.title}`" />
        <div class="flex flex-col justify-center items-start space-y-5 p-6 text-white">
            <h1 class="text-9xl bg-black/30 text-slate-200 p-2">{{ props.title }}</h1>
            <p class="text-2xl bg-black/30 text-slate-200 p-2">{{ props.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PromotionCardProps } from "./SPromotionCard.types"

const props = withDefaults(defineProps<PromotionCardProps>(), {})
</script>
