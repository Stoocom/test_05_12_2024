import { createApp } from 'vue'
import naive from 'naive-ui'
import './style.scss'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

createApp(App)
    .use(naive)
    .use(router)
    .use(store)
    .mount('#app')
