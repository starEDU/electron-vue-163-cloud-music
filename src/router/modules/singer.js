export const singer = [
    {
        path: '/singer',
        name: 'singer',
        component: ()=>import(/* webpackChunkName: "singer" */ '@/views/LayoutContent/SingerPage'),
        meta: {
            title: '歌手'
        }
    }
]
