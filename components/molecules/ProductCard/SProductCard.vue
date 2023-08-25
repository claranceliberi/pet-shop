<template>
    <div class="space-y-3 flex flex-col w-[24.875rem] items-center px-[1.13rem] py-[2.5rem] hover:shadow-md rounded-sm">
        <img :src="props.src" class="h-[13.75rem] object-contain" />
        <div class="w-[13.75rem]">
            <h2 class="underline font-medium">{{ props.title }}</h2>
            <p class="text-gray-500">{{ props.description }}</p>
            <h5 class="font-medium">{{ props.price }}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductCardProps } from "./SProductCard.types"

const props = defineProps<ProductCardProps>()
</script>
