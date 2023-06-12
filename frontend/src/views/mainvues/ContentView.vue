<template>
    <div class="content" style="padding-bottom:100px;">
        <div class="container" v-if="!(store.state.userRole == 'Donee')">
            <div class="search">
                <input type="text" v-model="search" placeholder="Search...">
                <button class="btn-primary"><img src="@/assets/Search_alt_fill.png" alt=""> Search</button>
            </div>
            <div class="item-deck">
                <post-item v-for="item in data" :key="item.id" :item="item"></post-item>
            </div>
        </div>
        <div class="container" v-else>
            <div class="form" v-if="activeForm == 1">
                <h3>Create a request</h3>
                <form action="" @submit="getInfo">
                    <div class="form-input">
                        <label for="aname">Full name</label>
                        <input type="text" id="aname" v-model="user.name" placeholder="A.B.C. example">
                    </div>
                    <div class="form-input">
                        <label for="fname">First name</label>
                        <input type="text" id="fname" v-model="user.fname" placeholder="example">
                    </div>
                    <div class="form-input">
                        <label for="lname">Last name</label>
                        <input type="text" id="lname" v-model="user.lname" placeholder="example">
                    </div>
                    <div class="form-input">
                        <label for="contact">Contact number</label>
                        <input type="text" id="contact" v-model="user.contact" placeholder="0724659871">
                    </div>
                    <div class="form-input">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="user.email" placeholder="example@exp.com">
                    </div>
                    <div class="form-input">
                        <label for="dob">Date of birth</label>
                        <input type="date" id="dob" v-model="user.dob">
                    </div>
                    <div class="form-input">
                        <label for="bginfo">Background info</label>
                        <textarea rows="5" id="bginfo" v-model="user.bginfo"></textarea>
                    </div>
                    <div class="form-input">
                        <label for="need">What you need</label>
                        <textarea rows="5" id="need" v-model="user.need"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">Next</button>
                </form>
            </div>
            <div class="form" v-if="activeForm == 2">
                <h3>Verify what you asked</h3>
                <form action="" @submit="getFiles">
                    <div class="form-input">
                        <label for="img">Images to describe your state</label>
                        <input type="file" id="img" multiple @change="handleImages">
                    </div>
                    <div class="form-input">
                        <label for="img">A legal Document to verify your state</label>
                        <input type="file" id="img" multiple @change="handleFile">
                    </div>
                    <button type="submit" class="btn-primary">Submit</button>
                </form>
            </div>
            <div class="form" v-if="activeForm == 3" style="display:flex;align-items:center;flex-direction:column;">
                <img src="@/assets/check_ring_round.png" alt="">
                <h3>All Done</h3>
                <p>We verify your request and let you know when it done</p>
                <router-link to="/dashboard" style="margin: 2rem auto" class="btn-primary">Go to Dashboard</router-link>
            </div>
        </div>
        <div class="ad-block">
            Advertisement
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import PostItem from "@/components/PostItem.vue";
import { useStore } from "vuex";
import axios from 'axios'

const search = ref('')
const store = useStore()
const activeForm = ref(1)
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

const user = reactive({
    name: '',
    fname: '',
    lname: '',
    contact: '',
    email: '',
    dob: '',
    bginfo: '',
    needs: ''
})
const imgFiles = ref()

const handleImages = (e) => {
    console.log(e)
}

const getInfo = (e) => {
    e.preventDefault()
    activeForm.value++
}

const getFiles = (e) => {
    e.preventDefault()
    activeForm.value++
}
</script>

<style>
.content .search {
    display: flex;
    max-width: 800px;
    border-radius: 1rem;
    overflow: hidden;
    margin: 2rem auto;
}

.content .search input {
    width: calc(100% - 150px);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: rgb(234, 236, 245);
}

.content .search input:focus {
    outline: none;
}

.content .search .btn-primary {
    width: 150px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-radius: 0;
}

.content .search .btn-primary img {
    margin-right: 10px;
}

.content .item-deck {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.content .form {
    padding: 2rem 0;
}

.content .form h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
}

.content .form .btn-primary {
    display: block;
    margin-left: auto;
}

.content .ad-block {
    height: 100px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgb(181, 181, 181);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>