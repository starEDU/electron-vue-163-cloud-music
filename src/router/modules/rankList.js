export const rankList = [
    {
        path: '/rank_list',
        name: 'rank_list',
        component: ()=>import(/* webpackChunkName: "rankList" */ '@/views/LayoutContent/RankListPage'),
        meta: {
            title: '排行榜'
        }
    }
]
