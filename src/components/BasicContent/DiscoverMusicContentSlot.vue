<template>
    <section class="page-layout">

        <a-tabs
            v-model:activeKey="activeKey"
            :tabBarGutter="0"
            @tabClick="tabClick"
        >
            <a-tab-pane
                v-for="(item,index) in topMenus"
                :key="index"
                :tab="item.title"
            >
                <keep-alive>
                    <component :is="componentList[index]"/>
                </keep-alive>
            </a-tab-pane>
        </a-tabs>

            <!--
                <section class="wy-wrapper">
                    <slot></slot>
                </section>
            -->
        <slot name="footer"></slot>
    </section>
</template>

<script>
import {ref} from "vue"
import PersonalizedRecommendationPage from "@/views/LayoutContent/PersonalizedRecommendationPage"
import SongSheetPage from "@/views/LayoutContent/SongSheetPage"
import AnchorStationPage from "@/views/LayoutContent/AnchorStationPage"
import RankListPage from "@/views/LayoutContent/RankListPage"
import SingerPage from "@/views/LayoutContent/SingerPage"
import LatestMusicPage from "@/views/LayoutContent/LatestMusicPage"

export default {
    name: "DiscoverMusicContentSlot",
    props: {
        topMenus: {
            type: Array,
            default() {
                return [
                    {
                        title: "个性推荐",
                        href: "/personalized_recommendation",
                    },
                    {
                        title: "歌单",
                        href: "/song_sheet",
                    },
                    {
                        title: "主播电台",
                        href: "/anchor_station",
                    },
                    {
                        title: "排行榜",
                        href: "/rank_list",
                    },
                    {
                        title: "歌手",
                        href: "/singer",
                    },
                    {
                        title: "最新音乐",
                        href: "/latest_music",
                    },
                ];
            },
        },
    },
    components: {
        PersonalizedRecommendationPage,
        SongSheetPage,
        AnchorStationPage,
        RankListPage,
        SingerPage,
        LatestMusicPage,
    },
    setup(){
        const activeKey = ref(0)
        const componentList = [
            PersonalizedRecommendationPage,
            SongSheetPage,
            AnchorStationPage,
            RankListPage,
            SingerPage,
            LatestMusicPage,
        ]
        const tabClick = ()=>{
            console.log(123)
        }

        return {
            activeKey,
            tabClick,
            componentList,
        }
    }
}
</script>

<style lang="less" scoped>

.wy-wrapper {
    position: relative;
    max-width: 1200px;
    padding: 0 20px;
    min-height: calc(100vh - 246px);
    margin: auto;
}

/deep/ .ant-tabs-top-bar{
    border-bottom: 1px solid #ddd !important;
}

.wy-header {
    margin: 0 30px;
    border-bottom: 1px solid #e3e2e2;
    text-align: center;
    a {
        display: inline-block;
        margin: 0 15px;
        color: #333;
        line-height: 42px;
        &.router-link-exact-active,
        &.router-link-active {
            border-bottom: 3px solid #c62f2f;
            color: #c62f2f;
        }
    }
}


</style>
