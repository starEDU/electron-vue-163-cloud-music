let recommendRoutes = [
    {
        path: "/discover_music",
        component: () =>import(/* webpackChunkName: "home" */ "@/views/SideRecommend/DiscoverMusicPage"),
        name: "discover_music",
        meta: {
            title: '发现音乐',
            icon: ()=><WifiOutlined />,
        },
    },
    {
        path: "/private_fm",
        component: () =>import(/* webpackChunkName: "private_fm" */ "@/views/SideRecommend/PrivateFMPage"),
        name: "private_fm",
        meta: {
            title: "私人FM",
            icon: ()=><RedditOutlined />,
            auth: true,
        },
    },
    {
        path: "/mv",
        component: () =>import(/* webpackChunkName: "mv" */ "@/views/SideRecommend/VideoPage"),
        name: "mv",
        meta: {
            title: "视频",
            icon: ()=><VideoCameraAddOutlined />,
            auth: false,
        },
    },
    {
        path: "/dynamic",
        component: () =>import(/* webpackChunkName: "dynamic" */ "@/views/SideRecommend/DynamicPage"),
        name: "dynamic",
        meta: {
            title: "动态",
            icon: ()=><TeamOutlined />,
            auth: true,
        },
    },
]

let recommendMap = []
recommendRoutes.concat().forEach((route) => {
    let map = {
        path: route.path,
        name: route.name,
        meta: route.meta,
    }
    recommendMap.push(map)
})

export {recommendRoutes, recommendMap}
