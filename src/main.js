import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import axiosPlugin from './plugins/axiosPlugin'
import antdPlugin from "@/plugins/antdPlugin"
import imgLazyPlugin from "@/plugins/imgLazyPlugin"


createApp(App)
    .use(axiosPlugin)
    .use(antdPlugin)
    .use(imgLazyPlugin)
    .use(store).use(router).mount('#app')
