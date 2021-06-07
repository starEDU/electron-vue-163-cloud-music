import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Setting from "@/views/Setting"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
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

export default router
