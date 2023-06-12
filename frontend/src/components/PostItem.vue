<template>
    <div class="item">
        <div class="item-header">
            <img src="@/assets/kidney.png" alt="">
        </div>
        <div class="item-body">
            <div class="title">
                <div class="title-text">
                    <h4> {{ item.title }} </h4>
                    <p>{{ item.date }}</p>
                </div>
                <div class="org" v-if="!(store.state.userRole == 'Organizer')">
                    {{ item.org }}
                </div>
            </div>
            <div class="content">
                {{ item.content }}
            </div>
            <router-link class="btn-primary" to="/content/post">Show</router-link>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()
defineProps({
    item: Object
})

</script>

<style scoped>
.item {
    min-height: 340px;
    max-width: 400px;
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.169);
}

.item .item-header {
    max-height: 200px;
    overflow: hidden;
}

.item .item-header img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.item .item-body {
    padding: 2rem 1rem 1rem;
}

.item .item-body .title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.item .item-body .title .title-text {
    margin-right: 1rem;
}

.item .item-body .title .title-text h4 {
    font-size: 1.2rem;
}

.item .item-body .title .title-text p {
    font-size: 0.7rem;
    margin-top: 5px;
}

.item .item-body .title .org {
    padding: 0.5rem 1rem;
    border: 1px solid #AC1515;
    border-radius: 2rem;
    background: #ac151530;
    color: #AC1515;
}

.item .item-body .content {
    font-size: 0.9rem;
    margin-top: 0.5rem;
}

.item .btn-primary {
    display: block;
    margin-left: auto;
    width: max-content;
    margin-top: 1rem;
}
</style>