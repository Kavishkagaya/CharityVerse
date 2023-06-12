<template>
    <div class="post-content">
        <div class="item-header">
            <img src="@/assets/kidney.png" alt="">
        </div>
        <div class="item-body">
            <div class="container">
                <div class="title">
                    <div class="title-text">
                        <h4> {{ item.title }} </h4>
                        <p>{{ item.date }}</p>
                    </div>
                    <div class="org" v-if="!(store.state.userRole == 'Organizer')">
                        {{ item.org }}
                    </div>
                </div>
                <div class="content" style="margin-top: 2rem">
                    <h4>Discription</h4>
                    {{ item.content }}
                </div>
                <div class="flex-box">
                    <img src="@/assets/blooddon.jpg" alt="">
                    <img src="@/assets/blooddon.jpg" alt="">
                    <img src="@/assets/blooddon.jpg" alt="">
                </div>
                <button class="btn-primary">{{ store.state.userRole == "Organizer" ? "Accept" : "Contact" }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
const item = ref(
    {
        title: "Need B+ Blood",
        date: "23 May",
        org: "Hope.org",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatum quos aliquam illo culpa veniam, dicta fugiat amet iusto non totam illum laboriosam reiciendis, tempore voluptatibus autem ipsam tempora assumenda?",
        id: 1
    })
</script>

<style scoped>
.post-content {
    padding-bottom: 2rem;
}

.item-header img {
    height: 500px;
    width: 100%;
}

.item-body .title h4 {
    font-size: 2rem;
    margin-top: 2rem;
}

.item-body .title .org {
    padding: 0.5rem 1rem;
    border: 1px solid #AC1515;
    border-radius: 2rem;
    background: #ac151530;
    color: #AC1515;
    margin: 2rem 0 0;
    width: max-content;
}

.btn-primary {
    display: block;
    margin-left: auto;
    margin-top: 2rem;
}

.flex-box {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
}

.flex-box img {
    height: 150px;
    width: 200px;
    object-fit: cover;
}
</style>