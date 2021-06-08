import { createRouter, createWebHashHistory } from 'vue-router'

import {Modal} from "ant-design-vue"


import Home from '../views/Home.vue'
import Setting from "@/views/Setting"
import {recommendRoutes} from "@/router/modules/recommend"
import {myMusicRoutes} from "@/router/modules/myMusic"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/discover_music',
    children: [
        ...recommendRoutes,
        ...myMusicRoutes,
      {
        path: '/setting',
        name: 'Setting',
        component: Setting
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  Modal.destroyAll();
  next()
})

export default router
