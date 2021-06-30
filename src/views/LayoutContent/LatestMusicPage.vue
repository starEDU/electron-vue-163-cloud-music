<template>
    <div class="newsong">
<!--        <router-link to="/song_list_page"> 歌单列表页面 </router-link>-->
        <div class="cates">
            <a
                href="#"
                v-for="(val, key) in cateMap"
                :key="key"
                class="item"
                :class="{ current: key === songType }"
                @click="changeType(key)"
            >{{ val }}</a
            >
        </div>
        <div class="tracks">
            <div class="tracks-top">
                <div class="item">
                    <a-button-group>
                        <a-button
                            type="primary"
                            @click="playAll"
                        >
                            <template #icon>
                                <PlayCircleOutlined />
                            </template>
                            播放全部
                        </a-button>
                        &nbsp;&nbsp;
                        <a-button
                            type="primary"
                            title="添加所有到播放列表"
                        >
                            <template #icon>
                                <PlusOutlined />
                            </template>
                        </a-button>
                    </a-button-group>
                </div>
            </div>
            <div class="tracks-body">
<!--                <a-spin :spinning="loading" />-->
                <SongListTable :type="songType"/>


            </div>
        </div>
    </div>
</template>

<script>
import {ref,reactive,toRefs,} from "vue"


import SongListTable from "@/components/BasicContent/SongSheet/SongListTable"

export default {
    name: "LatestMusicPage",
    components: {SongListTable},
    setup(){
        const songList = reactive({
            songList: []
        })

        const loading = ref(false)
        const songType = ref(0)
        const cateMap = {
            0: "全部",
            7: "华语",
            96: "欧美",
            8: "日本",
            16: "韩国",
        }

        const changeType = (type)=>{

            songType.value = type
        }


        const playAll = ()=>{
            console.log('播放全部逻辑...')
        }

        return {
            loading,
            songType,
            cateMap,
            changeType,
            ...toRefs(songList),

            playAll,

        }
    }
}
</script>

<style lang="less" scoped>

@primary-color: #c62f2f;

.ant-btn-primary{
    background-color: @primary-color;
    border-color: @primary-color !important;
    margin-right: 1.5px !important;
}

.newsong {
    padding: 0 20px;
    .tracks {
        border: 1px solid #eee;

        &-top {
            display: flex;
            justify-content: space-between;
            padding: 10px;
        }

        &-body {
            position: relative;

            .avatar {
                width: 40px;
                height: 40px;
                margin-right: 4px;
            }

            /deep/ .song-item {
                padding: 5px 0;
            }

           /deep/ .ant-spin-spinning {
                position: absolute;
                left: 50%;
                top: 100px;
                transform: translateX(-50%);
                z-index: 88;
                opacity: 1;

                .ant-spin-dot-item{
                    background-color: @primary-color !important;
                }
            }
        }
    }

    .cates {
        margin: 10px 0;

        .item {
            margin-right: 12px;
            color: #333;

            &.current {
                color: @primary-color;
            }
        }
    }
}
</style>
