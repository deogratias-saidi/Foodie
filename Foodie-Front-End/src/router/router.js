import { createWebHistory, createRouter } from "vue-router";
import Splash from "../pages/Splash/Splash.vue"
import SplashSign from "../pages/Splash/SplashSign.vue"
import SignIn from '../pages/SignUp/SignIn.vue'
import SignUp from '../pages/SignUp/SignUp.vue'
import Home from '../pages/Home/Home.vue'
import OpenRecipe from '../pages/RecipeDetail/OpenRecipe.vue'
import Profile from '../pages/Profile/Profile.vue'
import MyProfile from '../pages/Profile/MyProfile.vue'
import SettingsPage from '../pages/Profile/SettingsPage.vue'

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

    /* Home */

    {
        path: '/home',
        component: Home,
        name:'Home',
        iconClass: 'fa fa-home',
        mainMenu: true,
        
    },
    {
        path: '/home',
        component: Home,
        name:'search',
        iconClass: 'fa fa-search',
        mainMenu: true,
    },
    {
        path: '/home',
        component: Home,
        name:'add',
        iconClass: 'fa fa-plus',
        mainMenu: true,
    },
    {
        path: '/home',
        component: Home,
        name:'messages',
        iconClass: 'far fa-comment-dots',
        mainMenu: true,
    },
    {
        path: '/myprofile',
        component: MyProfile,
        name:'account',
        iconClass: 'fa fa-user',
        mainMenu: true,
    },

    /* Recipe Detail */

    {
        path: '/recipe',
        component: OpenRecipe,
        name:'recipe',
    },
    /* Profile */
    {
        path: '/profile',
        component: Profile,
        name:'profile',
    },
    {
        path: '/myprofile',
        component: MyProfile,
        name:'myprofile',
    },

    /* Settings */

    {
        path: '/settings',
        component: SettingsPage,
        name:'settings',
    }


]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router