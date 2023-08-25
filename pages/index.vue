<script lang="ts" setup>
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/vue"

import { Swiper as SwiperClass } from "swiper"
import { getPromotions } from "@/services/mainpage"

const onSwiper = (swiper: SwiperClass) => {
    console.log(swiper)
}
const onSlideChange = () => {
    console.log("slide change")
}

const promotions = await getPromotions()
</script>

<template>
    <div>
        <div class="max-w-[75rem] m-auto py-4">
            <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="promotion in promotions.data" :key="promotion.uuid">
                    <ProductCard :src="`http://pet-shop.buckhill.com.hr/api/v1/file/${promotion.metadata.image}`" :title="promotion.title" :description="promotion.content" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
