<template>
    <a-list class="intro">
        <a-list-item >
            <a-list-item-meta>
                <template v-slot:title>
                    <h1>{{ playlist.name }}</h1>
                </template>

                <template v-slot:description>
                    <div class="creator">
                        <img
                            width="32"
                            height="32"
                            class="creator-avatar"
                            :src="`${playlist?.creator?.avatarUrl}?param=32y32`"
                        />
                        <router-link
                            :to="`/user?id=${playlist.creator?.userId}`"
                            class="name"
                        >{{ playlist.creator?.nickname }}</router-link>
                        <span class="time">{{ toDate(playlist.createTime) }}创建</span>
                    </div>

                    <ul class="actions">
                        <li class="item">
                            <a-button-group size="small">
                                <a-button
                                    type="primary"
                                    @click="play"
                                ><PlayCircleOutlined />播放全部</a-button>
                                <a-button
                                    type="primary"
                                    title="添加所有到播放列表"
                                    @click="addToList"
                                ><PlusOutlined /></a-button>
                            </a-button-group>
                        </li>
                        <li class="item">
                            <a-button
                                size="small"
                                @click="subscribe(2, playlist)"
                                v-if="isLiked"
                            ><CheckCircleOutlined />已收藏({{ playlist.subscribedCount }})</a-button>
                            <a-button
                                size="small"
                                @click="subscribe(1, playlist)"
                                v-else
                            ><FolderAddOutlined />收藏({{ playlist.subscribedCount }})</a-button>
                        </li>
                        <li class="item" @click="share">
                            <a-button size="small">
                                <ShareAltOutlined />分享({{ playlist.shareCount }})
                            </a-button>
                        </li>
                        <li class="item">
                            <a-button size="small" @click="downloadAll">
                                <DownloadOutlined />下载全部
                            </a-button>
                        </li>
                    </ul>

                    <div class="tags">
                        <span>标签：</span>
                        <a-breadcrumb
                            v-if="playlist.tags && playlist.tags.length"
                        >
                            <a-breadcrumb-item
                                v-for="(tag, tagIndex) in playlist.tags"
                                :key="tagIndex"
                            >
                                <router-link :to="`/playlist?cat=${tag}`">
                                    {{tag}}
                                </router-link>
                            </a-breadcrumb-item>
                        </a-breadcrumb>
                        <span v-else>无</span>
                    </div>

                    <div class="desc">
                        <span>简介：</span>
                        <span
                            v-html="playlist.description"
                            v-if="playlist.description"
                        ></span>
                        <span v-else>无</span>
                    </div>
                </template>

                <template v-slot:avatar>
                    <img
                        width="200"
                        height="200"
                        :src="`${playlist.coverImgUrl}?param=200y200`"
                        :key="playlist.id"
                        alt=""
                    />
                </template>

            </a-list-item-meta>
            <ul class="action">
                <li class="action-item">
                    <div>歌曲数</div>
                    <strong>{{ playlist.trackCount }}</strong>
                </li>
                <li class="action-item">
                    <div>播放数</div>
                    <strong>{{ playlist.playCount }}</strong>
                </li>
            </ul>
        </a-list-item>
    </a-list>

    <div class="tab-bar">
        <!--
        <nav class="nav">
            <i
                v-for="(tab, index) in tabs"
                :to="{ name: tab.name }"
                :key="index"
            >{{ tab.label }}</i>
        </nav>
        -->
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane
                v-for="(tab, index) in tabs"
                :key="index"
                :tab="tab.label"
            >
                <!--<component :is=""/>-->
                <SongListTable />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import {ref,reactive,onErrorCaptured,toRefs,} from "vue"
import {useRoute,} from "vue-router"
import moment from "moment"
import SongListTable from "@/components/BasicContent/SongSheet/SongListTable"


export default {
    name: "SongListPage",
    components: {SongListTable},
    setup() {
        const playlist = reactive({playlist:{}})
        const loading = ref(false)
        const isLiked = ref(false)
        const activeKey = ref(0)

        const tabs = [
            {
                name: "playlist-id-tracks",
                label: "歌曲列表",
            },
            {
                name: "playlist-id-comment",
                label: "评论",
            },
            {
                name: "playlist-id-subscriber",
                label: "收藏者",
            },
        ]

        const Route = useRoute()
        console.log(Route.query?.id)
        const getPlayListData = async ()=>{
            const res = await $axios.get('/api/playlist/detail?id='+6809333497)
            console.log(res.data.playlist)
            playlist.playlist = res.data.playlist
        }
        getPlayListData()

        const play = ()=>{}
        const addToList = ()=>{}
        const subscribe = ()=>{}
        const downloadAll = ()=>{}
        const share = ()=>{}

        const toDate = (val, format) => {
            return moment(val).format(format || "YYYY-MM-DD");
        }


        onErrorCaptured(()=>{
            console.log(123)
        })

        return {
            ...toRefs(playlist),
            loading,
            isLiked,
            play,
            addToList,
            subscribe,
            downloadAll,
            toDate,
            share,
            tabs,
            activeKey,
        };
    },
}
</script>

<style scoped>
.ant-btn-primary{
    background-color: #c62f2f;
    border-color: red !important;
}

.intro >>> .ant-list-item {
    align-items: initial;
}

.intro >>> .ant-avatar {
    border-radius: 0;
}

.intro >>> .ant-list-item-content {
    position: absolute;
    right: 0;
    top: 0;
}

.intro >>> .ant-list-item-meta-title {
    padding-right: 120px;
    line-height: 1.1;
}

.tab-bar{
    padding: 0 20px;
}
</style>

<style lang="less" scoped>


.intro {
    padding: 20px;
    .creator {
        display: flex;
        align-items: center;
        .creator-avatar {
            border-radius: 50%;
            margin-right: 5px;
        }
        .name {
            margin-right: 5px;
            color: #333;
        }
        .time {
            font-size: 13px;
        }
    }
    .actions {
        margin: 15px 0;
        .item {
            display: inline-block;
            margin-right: 10px;
        }
        .ant-btn {
            font-size: 12px;
        }
    }
    .tags {
        display: flex;
        margin-bottom: 10px;
        font-size: 13px;
        a {
            font-size: 13px;
            color: #006fe3;
        }
    }
    .action {
        display: flex;
        text-align: right;
        font-size: 12px;
        height: fit-content;
        color: rgba(0, 0, 0, 0.65);
        font-weight: normal;

        .action-item {
            padding: 0 10px;
            margin-top: 12px;
            &:not(:last-child) {
                border-right: 1px solid #ddd;
            }
        }
    }
}

.desc {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


</style>
