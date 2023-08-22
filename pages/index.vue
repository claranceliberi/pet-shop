<script lang="ts" setup>
import { useCounterStore } from '../store/index';

const page = ref(1)
const items = ref(Array(55))

const store = useCounterStore()

</script>

<template>
    <div>
        <h1>home page</h1>

        <p>{{ store.name }}</p>

    </div>
</template>
