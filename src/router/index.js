import { createRouter, createWebHashHistory } from 'vue-router'

import {Modal} from "ant-design-vue"


import Home from '../views/Home.vue'
import Setting from "@/views/Setting"
import {recommendRoutes} from "@/router/modules/recommend"
import {myMusicRoutes} from "@/router/modules/myMusic"
import {songSheet} from "@/router/modules/songSheet"
import {anchorStation} from "@/router/modules/anchorStation"
import {rankList} from "@/router/modules/rankList"
import {singer} from "@/router/modules/singer"
import {latestMusic} from "@/router/modules/latestMusic"
import {personalizedRecommendation} from "@/router/modules/personalizedRecommendation"
import SongListPage from "@/views/LayoutContent/SongListPage"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/discover_music',
    children: [
        // 左侧 [推荐] 对应的路由表
        ...recommendRoutes,
        // 左侧 [我的音乐] 对应的路由表

        // 个性推荐
        ...personalizedRecommendation,
        ...myMusicRoutes,
        // 歌单
        ...songSheet,
        // 主播电台
        ...anchorStation,
        // 排行榜
        ...rankList,
        // 歌手
        ...singer,
        // 最新音乐
        ...latestMusic,
        {
            path: '/setting',
            name: 'Setting',
            component: Setting
        },
        {
            path: '/song_list_page',
            name: 'SongListPage',
            component: SongListPage
        }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    Modal.destroyAll();

    if (to.meta && to.meta.auth){
        const userId = 123
        if ( userId ){
            next()
        }else {
            console.log('redirect')
        }
    }else {
        next()
    }

  // next()
})

router.afterEach((to,from)=>{
    if ( to.meta && to.meta.title ){
        
    }
})

export default router
