export const anchorStation = [
    {
        path: '/anchor_station',
        name: 'anchor_station',
        component: ()=>import(/* webpackChunkName: "anchorStation" */ '@/views/LayoutContent/AnchorStationPage'),
        meta: {
            title: '主播电台'
        }
    }
]
