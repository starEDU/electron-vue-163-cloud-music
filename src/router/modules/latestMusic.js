export const latestMusic = [
    {
        path: '/latest_music',
        name: 'latest_music',
        component: ()=>import(/* webpackChunkName: "latestMusic" */ '@/views/LayoutContent/LatestMusicPage'),
        meta: {
            title: '最新音乐'
        }
    }
]
