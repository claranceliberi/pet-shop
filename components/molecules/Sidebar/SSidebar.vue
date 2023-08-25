<template>
    <div class="bg-primary/20 h-full">
        <ul>
            <li v-for="(link, i) in props.links" :key="i" class="px-4 py-5 space-x-4 text-gray-600 hover:bg-primary/100 hover:text-white cursor-pointer w-[15rem]" @click="link.onClick">
                <i :class="'pi ' + link.icon"></i> <span> {{ link.label }} </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { SidebarProps } from "./SSidebar.types"

const props = withDefaults(defineProps<SidebarProps>(), {
    links: [],
})
</script>
