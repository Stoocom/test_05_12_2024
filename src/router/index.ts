import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import LoginPage from "../pages/LoginPage.vue";

export const router = createRouter({
    routes: [
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/main',
            component: MainPage,

        },
    ],
    history: createWebHistory()
})