<script lang="ts" setup>
import "swiper/css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"
import { Swiper as SwiperClass } from "swiper"
import { getBlogs, getPromotions } from "@/services/mainpage"
import { Blog, Category, Product } from "@/services/types"
import { getCategories } from "@/services/category"
import { getProducts } from "@/services/products"

const swipper = ref<SwiperClass | null>(null)
const categories = ref<Category[]>([])
const products = ref<Record<string, Product[]>>({})
const blogs = ref<Blog[]>([])
const LIMIT = 2

const onSwiper = (swiper: SwiperClass) => {
    swipper.value = swiper
}

const promotions = await getPromotions()
onMounted(async () => {
    // run request to pull categories and blogs concurrently
    Promise.allSettled([loadCategories(), loadBlogs()])
})

watchEffect(async () => {
    const _categories = categories.value

    // run request to pull products concurrently
    _categories.forEach((category) => {
        loadProducts(category.uuid)
    })
})

async function loadCategories() {
    categories.value = (await getCategories({ limit: LIMIT, page: 1 })).data
}

async function loadBlogs() {
    blogs.value = (await getBlogs({ limit: LIMIT, page: 1 })).data
}

async function loadProducts(id: string) {
    const _products = (await getProducts({ category: id })).data
    products.value[id] = _products
}
</script>

<template>
    <div class="max-w-[75rem] m-auto">
        <div class="pb-5 pt-10 flex items-center">
            <div class="m-auto">
                <Input class="w-fit" icon="pi pi-search" label="Search" />
            </div>
        </div>
        <div class="max-w-[75rem] m-auto py-4">
            <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper">
                <swiper-slide v-for="promotion in promotions.data" :key="promotion.uuid">
                    <PromotionCard :src="`http://pet-shop.buckhill.com.hr/api/v1/file/${promotion.metadata.image}`" :title="promotion.title" :description="promotion.content" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="py-4">
            <div v-for="(category, i) in categories" :key="category.uuid" class="pt-5">
                <h1 class="text-primary text-[3.75rem] font-light capitalize">{{ category.title }}</h1>

                <div>
                    <swiper :slides-per-view="4" :space-between="50">
                        <swiper-slide v-for="product in products[category.uuid]" :key="product.uuid">
                            <ProductCard
                                :title="product.title"
                                :description="product.category.title"
                                :price="`${product.price} kn`"
                                :src="`http://pet-shop.buckhill.com.hr/api/v1/file/${product.metadata.image}`"
                            />
                        </swiper-slide>
                    </swiper>
                </div>

                <div :class="`text-primary text-[3.75rem] py-6 font-light flex space-x-10 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`">
                    <img class="w-[38rem]" :src="`http://pet-shop.buckhill.com.hr/api/v1/file/${blogs[i].metadata.image}`" alt="" />
                    <div>
                        <h1>{{ blogs[i].title }}</h1>
                        <Button
                            ><span class="underline uppercase">{{ blogs[i].slug.split("-").join(" ") }}</span></Button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
