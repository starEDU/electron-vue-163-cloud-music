import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import axiosPlugin from './plugins/axiosPlugin'
import antdPlugin from "@/plugins/antdPlugin"
import imgLazyPlugin from "@/plugins/imgLazyPlugin"
import globalPlugin from "@/plugins/globalPlugin"

const app = createApp(App)
app.use(axiosPlugin)
    .use(antdPlugin)
    .use(imgLazyPlugin)
    .use(globalPlugin)
    .use(store).use(router).mount('#app')


