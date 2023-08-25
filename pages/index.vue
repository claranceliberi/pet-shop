<script lang="ts" setup>
import "swiper/css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"
import { Swiper as SwiperClass } from "swiper"
import { getPromotions } from "@/services/mainpage"
import { Category, Product } from "@/services/types"
import { getCategories } from "@/services/category"
import { getProducts } from "@/services/products"

const swipper = ref<SwiperClass | null>(null)
const categories = ref<Category[]>([])
const products = ref<Record<string, Product[]>>({})

const onSwiper = (swiper: SwiperClass) => {
    swipper.value = swiper
}

const promotions = await getPromotions()

onMounted(async () => {
    const _categories = (await getCategories({ limit: 2, page: 1 })).data

    categories.value = _categories

    for (const category of _categories) {
        const _products = (await getProducts({ category: category.uuid })).data

        products.value[category.uuid] = _products
    }

    console.log(products.value)
})
</script>

<template>
    <div>
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
        <div>
            <div v-for="category in categories" :key="category.uuid">
                <h1>{{ category.title }}</h1>

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
            </div>
        </div>
    </div>
</template>
