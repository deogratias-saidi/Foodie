import { createWebHistory, createRouter } from "vue-router";
import Splash from "../pages/Splash/Splash.vue"
import SplashSign from "../pages/Splash/SplashSign.vue"
import SignIn from '../pages/SignUp/SignIn.vue'
import SignUp from '../pages/SignUp/SignUp.vue'

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

    /* Sign In and Up */

    {
        path: '/signin',
        component: SignIn,
        name: 'SignIn'
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'SignUp'
    },
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router