import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(router).mount('#app')
