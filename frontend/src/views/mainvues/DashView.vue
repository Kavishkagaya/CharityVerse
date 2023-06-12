<template>
    <div class="dashboard">
        <div class="banner">
            <div class="container">
                <div class="flex-box">
                    <div class="banner-left">
                        <h3>WELCOME BACK <span>{{ store.state.username.toUpperCase() }}</span></h3>
                        <p v-if="!(store.state.userRole == 'Donee')">Extend your hand to those who need it most, and witness
                            the transformative power of compassion.
                        </p>
                        <p v-else>Rest assured, we stand ready to assist you.</p>
                    </div>
                    <img src="@/assets/handtohand.png" alt="">
                </div>
            </div>
        </div>
        <item-swiper v-if="store.state.userRole == 'Donator'" header="Most Needed" nextlink="/content"
            :data="data"></item-swiper>
        <item-swiper v-if="store.state.userRole == 'Organizer'" header="Your Accepted Projects" nextlink="/content"
            :data="data"></item-swiper>
        <div class="partners" v-if="!(store.state.userRole == 'Organizer')">
            <div class="container">
                <h3>Partners</h3>
                <div class="flex-box">
                    <img src="@/assets/R.png" alt="">
                    <img src="@/assets/C9T4AcuF8f.webp" alt="">
                    <img src="@/assets/unnamed.jpg" alt="">
                    <img src="@/assets/R.png" alt="">
                    <img src="@/assets/C9T4AcuF8f.webp" alt="">
                    <img src="@/assets/unnamed.jpg" alt="">
                    <img src="@/assets/R.png" alt="">
                    <img src="@/assets/C9T4AcuF8f.webp" alt="">
                    <img src="@/assets/unnamed.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
import ItemSwiper from '@/components/ItemSwiper.vue';

const store = useStore()
const data = ref([
    {
        title: "Need B+ Blood",
        date: "23 May",
        org: "Hope.org",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi dolor dignissimos et reiciendis sapiente maiores perspiciatis tempore, laboriosam vel...",
        id: 1
    },
    {
        title: "Help us to build our home",
        date: "30 May",
        org: "Sarana.org",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi dolor dignissimos et reiciendis sapiente maiores perspiciatis tempore, laboriosam vel...",
        id: 2
    },
    {
        title: "Help us to build our home",
        date: "30 May",
        org: "Sarana.org",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi dolor dignissimos et reiciendis sapiente maiores perspiciatis tempore, laboriosam vel...",
        id: 3
    }
])
</script>

<style>
.dashboard .banner {
    background: linear-gradient(to right top, #AC1515 5.16%, #F47731 94.76%);
}

.dashboard .banner .flex-box {
    display: flex;
    align-items: center;
    min-height: 250px;
}

.dashboard .banner .flex-box img {
    margin-left: auto;
    height: 100%;
}

.dashboard .banner .banner-left {
    color: white;
}

.dashboard .banner .banner-left h3 {
    font-size: clamp(1rem, 3vw, 2.5rem);
    font-weight: 400;
}

.dashboard .banner .banner-left h3 span {
    font-weight: 600;
}

.dashboard .banner .banner-left p {
    margin-top: 1rem;
    font-weight: 300;
}

.dashboard .partners {
    padding: 2rem 0;
}

.dashboard .partners h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
}

.dashboard .partners .flex-box {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.dashboard .partners .flex-box img {
    height: 10rem;
    width: 200px;
    object-fit: contain;
}
</style>