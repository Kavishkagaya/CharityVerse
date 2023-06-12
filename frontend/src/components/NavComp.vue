<template>
    <div class="nav-bar">
        <div class="container">
            <div class="flex-box">
                <div class="logo">
                    <img src="@/assets/logo-color.png" alt="">
                    <span>CharityVerse</span>
                </div>
                <div class="link-deck">
                    <slot></slot>
                </div>
                <div class="profile">
                    <span>{{ store.state.username[0].toUpperCase() }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
</script>

<style>
.nav-bar {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.169);
}

.nav-bar .container .flex-box {
    display: flex;
    align-items: center;
    height: 4rem;
}

.nav-bar .logo {
    display: flex;
    align-items: center;
}

.nav-bar .logo img {
    height: 2rem;
    margin-right: 10px;
}

.nav-bar .logo span {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
}

.nav-bar .link-deck {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-right: 2rem;
}

.nav-bar .link-deck a {
    text-decoration: none;
    color: #888;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.nav-bar .link-deck a.router-link-active.router-link-exact-active {
    color: #333;
    font-weight: 500;
}

.nav-bar .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 2px solid #F47731;
    font-size: 20px;
}
</style>