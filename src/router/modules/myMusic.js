let myMusicRoutes = [
    {
        path: "/music_local",
        component: () =>import( /* webpackChunkName: "music_local" */ "@/views/SideMyMusic/LocalMusicPage"),
        name: "music_local",
        meta: {
            title: "本地音乐",
            icon: ()=><PlayCircleOutlined />,
        },
    },
    {
        path: "/music_download",
        component: () =>import(/* webpackChunkName: "music_download" */ "@/views/SideMyMusic/DownloadManagerPage"),
        name: "music_download",
        meta: {
            title: "下载管理",
            icon: ()=><CloudDownloadOutlined />,
        },
    },
    {
        path: "/music_cloud",
        component: () =>import(/* webpackChunkName: "music_cloud" */ "@/views/SideMyMusic/MyMusicCloudPage"),
        name: "music_cloud",
        meta: {
            title: "我的音乐云盘",
            icon: ()=><CloudOutlined />,
            auth: true,
        },
    },
    {
        path: "/music_collect",
        component: () =>import(/* webpackChunkName: "music_collect" */ "@/views/SideMyMusic/MyCollectionPage"),
        name: "music_collect",
        meta: {
            title: "我的收藏",
            icon: ()=><UserAddOutlined />,
            auth: true,
        },
    },
];

let myMusicMap = [];
myMusicRoutes.concat().forEach((route) => {
    let map = {
        path: route.path,
        name: route.name,
        meta: route.meta,
    };
    myMusicMap.push(map);
});

export { myMusicRoutes, myMusicMap };
