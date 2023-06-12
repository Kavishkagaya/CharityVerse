<template>
    <div class="main">
        <nav-comp>
            <router-link to="/dashboard">Dashboard</router-link>
            <router-link to="/content">{{ secondPage }}</router-link>
            <router-link to="/about">About</router-link>
        </nav-comp>
        <div class="alert" v-if="!store.state.verifyState">
            <div class="container">
                You are not verified your account. Please Verify <a href="">Now</a>
            </div>
        </div>
        <router-view></router-view>
        <img src="@/assets/footer.png" style="width:100%" alt="">
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import NavComp from '@/components/NavComp.vue';
import { computed } from 'vue';

const store = useStore()
const secondPage = computed(() => {
    if (store.state.userRole == "Donator")
        return "Donations"
    if (store.state.userRole == "Organizer")
        return "Requests"
    if (store.state.userRole == "Donee")
        return "Request"
})

</script>

<style>
.alert {
    height: 3rem;
    display: flex;
    align-items: center;
    background: rgb(255, 247, 196);
}

.alert a {
    color: rgb(253, 0, 0);
}
</style>