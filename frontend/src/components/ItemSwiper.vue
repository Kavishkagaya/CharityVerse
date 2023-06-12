<template>
    <div class="item-swiper container">
        <h3>{{ header }}</h3>
        <swiper slides-per-view="auto" :space-between="50" :navigation="true" :modules="modules">
            <swiper-slide v-for="item in data" :key="item.id">
                <post-item :item="item"></post-item>
            </swiper-slide>
        </swiper>
        <router-link class="btn-primary" to="/content">See More</router-link>
    </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper'
import PostItem from '@/components/PostItem.vue'
import 'swiper/css';
import 'swiper/css/navigation';

defineProps({
    header: String,
    data: Array
})
const modules = ref([Navigation])
</script>

<style>
.item-swiper {
    padding: 2rem 0;
}

.item-swiper h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 2rem;
}

.item-swiper>.btn-primary {
    display: block;
    width: max-content;
    margin-top: 1rem;
    margin-left: auto;
}

.item-swiper .swiper .swiper-button-next.swiper-button-disabled,
.item-swiper .swiper .swiper-button-prev.swiper-button-disabled {
    display: none !important;
}

.item-swiper .swiper .swiper-button-next,
.item-swiper .swiper .swiper-button-prev {
    height: 40px;
    width: 40px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(to right top, #AC1515 5.16%, #F47731 94.76%);
}

.item-swiper .swiper .swiper-button-next::after,
.item-swiper .swiper .swiper-button-prev::after {
    filter: brightness(0) invert();
    font-size: 25px;
}

.item-swiper .swiper .swiper-wrapper {
    padding: 1rem 0;
}

.item-swiper .swiper .swiper-slide {
    padding: 10px;
    max-width: 440px;
}
</style>