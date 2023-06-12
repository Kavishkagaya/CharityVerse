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
            <h3>Sign Up</h3>
            <span>Create a account for you</span>
            <form action="">
                <div class="form-radlist">
                    <p>Role</p>
                    <div class="radlist">
                        <input type="radio" name="role" id="rol1" v-model="user.Role" value="Donor">
                        <label for="rol1"><span></span> Donor</label>
                        <input type="radio" name="role" id="rol2" v-model="user.Role" value="Donee">
                        <label for="rol2"><span></span> Donee</label>
                        <input type="radio" name="role" id="rol3" v-model="user.Role" value="Organization">
                        <label for="rol3"><span></span> Organization</label>
                    </div>
                    <span class="details"></span>
                </div>
                <div class="form-input">
                    <label for="uname">Username</label>
                    <input type="text" id="uname" v-model="user.Username" placeholder="Example123">
                </div>
                <div class="form-input">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="user.Username" placeholder="example@exp.com">
                </div>
                <div class="form-input">
                    <label for="pass">Password</label>
                    <input type="password" id="pass" v-model="user.Password" placeholder="*********">
                </div>
                <div class="form-input">
                    <label for="rpass">Confirm Password</label>
                    <input type="password" id="rpass" v-model="user.cPassword" placeholder="*********">
                </div>
                <div class="form-footer">
                    <div class="links">
                        <p>Already have an account? <router-link to="/log-in">Log in</router-link></p>
                    </div>
                    <div class="submit btn-primary">
                        SIGNUP
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({
    Role: 'Donor',
    Username: '',
    Password: '',
    cPassword: '',
    Email: ''
})
</script>

<style></style>