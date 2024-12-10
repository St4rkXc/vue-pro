import './assets/main.css'
import 'primeicons/primeicons.css'
import router from '@/router/index.js'
import { createApp } from 'vue'
import App from './App.vue'

const appInstance = createApp(App)
appInstance.use(router)
appInstance.mount('#app') 
