import { createWebHistory, createRouter } from "vue-router";
import Splash from "../pages/Splash/Splash.vue"
import SplashSign from "../pages/Splash/SplashSign.vue"

const routes = [
    {
        path: '/',
        component: Splash,
        name: 'splash',
    },
    {
        path: '/splash',
        component: SplashSign,
        name: 'splashsign',
    },
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router