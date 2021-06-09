export const songSheet = [
    {
        path: '/song_sheet',
        name: 'song_sheet',
        component: ()=>import(/* webpackChunkName: "song_sheet" */ '@/views/LayoutContent/SongSheetPage'),
        meta: {
            title: '歌单'
        }
    }
]
