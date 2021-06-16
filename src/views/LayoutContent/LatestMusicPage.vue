<template>
    <div class="newsong">
        <router-link to="/song_list_page"> 歌单列表页面 </router-link>
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
                <a-table
                    :columns="columns"
                    :data-source="songList"
                    bordered
                    :loading="loading"
                    rowKey="id"
                    :rowSelection="{
                        type: 'radio',
                        selectedRowKeys: selectedRowKeys,
                        onChange: onSelectChange
                    }"
                    :customRow="customRow"
                    :pagination="false"

                ></a-table>

            </div>
        </div>
    </div>
</template>

<script>
import {ref,onMounted,reactive,watchEffect,toRefs,} from "vue"
import secondFormat from "second-format"

export default {
    name: "LatestMusicPage",
    setup(){
        const songList = reactive({
            songList: []
        })

        const columns = [
            {
                title: "序号",
                dataIndex: "id",
                customRender: ({text, record, index}) =>{
                    return index+1
                }
            },
            {
                title: "音乐标题",
                dataIndex: "name",
            },
            {
                title: "歌手",
                dataIndex: "artists",
                customRender: ({text, record, index}) =>{
                    return getSinger(text)
                }
            },
            {
                title: "专辑",
                dataIndex: "album",
                customRender: ({text, record, index}) =>{
                    return text.name
                }
            },
            {
                title: "时长",
                dataIndex: "duration",
                customRender: ({text, record, index}) =>{
                    return secondFormat(text/1000)
                }
            },
        ]
        const loading = ref(false)
        const songType = ref(0)
        const cateMap = {
            0: "全部",
            7: "华语",
            96: "欧美",
            8: "日本",
            16: "韩国",
        }

        // 处理歌手数组
        const getSinger = (val) => {
            const nameArr = val.map((item)=>{
                return item.name
            })
            return nameArr.join(',')
        }

        const getData = async ()=>{
            loading.value = true

            console.log(songType.value)
            try {
                const res = await $axios.get('/api/top/song?type='+songType.value)
                // console.log(res)
                loading.value = false
                songList.songList = res.data.data
            }catch (e) {
                console.log(e)
            }

        }
        watchEffect(()=>{
            getData()
        })

        const changeType = (type)=>{
            songType.value = type
        }

        //  双击选中
        const customRow = (record, index) => {
            return {
                onDblclick: (event) => {
                    console.log(record, index)
                    state.selectedRowKeys = [record.id]
                },
            }
        }

        // 单选 选中
        const state = reactive({
            selectedRowKeys: [],
        })
        const onSelectChange = selectedRowKeys => {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            state.selectedRowKeys = selectedRowKeys;
        }

        const playAll = ()=>{
            console.log('播放全部逻辑...')
        }

        return {
            columns,
            loading,
            songType,
            cateMap,
            changeType,
            customRow,
            ...toRefs(songList),
            ...toRefs(state),
            onSelectChange,
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
