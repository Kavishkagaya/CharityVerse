<template>
    <div class="login-sign">
        <div class="left">
            <div class="logo">
                <img src="@/assets/logo-white.png" alt="">
            </div>
            <div class="logo-text">
                <h2>CharityVerse</h2>
            </div>
            <p class="quote">“Small acts of kindness, big impact for change”</p>
            <span class="copyright">
                copyright CharityVerse 2023
            </span>
        </div>
        <div class="right">
            <h3>Login</h3>
            <span>Login to your account</span>
            <form action="" @submit="login">
                <div class="form-input">
                    <label for="uname">Username</label>
                    <input type="text" id="uname" v-model="user.username" placeholder="Example123">
                </div>
                <div class="form-input">
                    <label for="pass">Password</label>
                    <input type="password" id="pass" v-model="user.password" placeholder="*********">
                </div>
                <div class="form-footer">
                    <div class="links">
                        <a href="">Forget Password</a>
                        <p>Don't have an account? <router-link to="/sign-up">Create one</router-link></p>
                    </div>
                    <button class="submit btn-primary">
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import store from '@/store';
import { useRouter } from 'vue-router';

const router = useRouter()
const user = reactive({
    username: '',
    password: ''
})

const login = async (e) => {
    e.preventDefault()
    await axios.post("/api/users/login", user).then((res) => {
        store.state.username = res.data.user.uname
        store.state.isAuthenticated = true
        const roleFilter = () => {
            if (res.data.user.role === "receiver") {
                return "Donee"
            }
            else if (res.data.user.role == "donor") {
                return "Donator"
            }
            else {
                return "Organizer"
            }
        }

        store.state.userRole = roleFilter()
        router.push('/dashboard')
    }).catch((err) => {
        console.log(err)
    })
}
</script>

<style>
.login-sign {
    display: flex;
    height: 100vh;
}

.login-sign .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right top, #AC1515 5.16%, #F47731 94.76%);
    width: 50%;
    position: relative;
}

.login-sign .left .logo img {
    height: 90px;
}

.login-sign .left .logo-text {
    font-size: 1.8rem;
    margin-block: 0.5rem 1rem;
    color: white;
}

.login-sign .left .quote {
    font-weight: 300;
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: white;
    margin-top: 2rem;
}

.login-sign .left .copyright {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: white;
    font-family: 'Raleway', sans-serif;
}

.login-sign .right {
    margin: auto;
    width: clamp(250px, 40%, 700px);
}

.login-sign .right h3 {
    font-size: 2rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 12px;
}

.login-sign .right h3+span {
    display: block;
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 2rem;
}

.login-sign form .form-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 3rem;
}

.login-sign form .form-footer .links {
    font-size: 0.85rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
}

.login-sign form .form-footer .links a {
    color: #F47731;
    font-weight: 500;
}

.login-sign .btn-primary {
    min-width: 150px;
    text-align: center;
}
</style>