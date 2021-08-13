<template>
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
    ></a-table>
</template>

<script>
import {ref, reactive, toRefs,watchEffect,} from "vue"
import {Modal} from "ant-design-vue"

import secondFormat from "second-format"

import {useStore,} from "vuex"


export default {
    name: "SongListTable",
    // inheritAttrs: false,
    props: ['id','type'],
    setup(props) {

        const {commit, dispatch,} = useStore()

        const songList = reactive({
            songList: []
        })

        const columns = [
            {
                title: "序号",
                dataIndex: "id",
                customRender: ({index}) => {
                    return index + 1
                }
            },
            {
                title: "音乐标题",
                dataIndex: "name",
            },
            {
                title: "歌手",
                dataIndex: "ar",
                customRender: ({text, record,}) => {

                    return text ? getSinger(text) : getSinger(record['artists'])
                }
            },
            {
                title: "专辑",
                dataIndex: "al",
                customRender: ({text, record, }) => {
                    return text ? text.name : record['album']
                }
            },
            {
                title: "时长",
                dataIndex: "dt",
                customRender: ({text, record, }) => {
                    return text ? secondFormat(text / 1000) : secondFormat(record.duration/1000)
                }
            },
        ]

        const loading = ref(false)

        // 处理歌手数组
        const getSinger = (val) => {
            const nameArr = val.map((item) => {
                return item.name
            })
            return nameArr.join(',')
        }

        //  双击选中
        const customRow = (record, index) => {
            return {
                onDblclick: async () => {
                    // console.log(record, index)
                    state.selectedRowKeys = [record.id]

                    // 共享歌曲列表 方便上下一曲和播放模式
                    commit('setPlaySongList', songList.songList)
                    commit('setCurrentPlayIndex', index)

                    // 请求播放地址
                    const r =  await dispatch('getMusicUrl', {
                        id: record.id,
                        name: record.name,
                        author: record.ar ? getSinger(record.ar) : getSinger(record['artists']),
                        pic: record.ar ? record['al']['picUrl'] : record['album']['picUrl'],
                    })
                    // console.log(r)
                    // 判断当前歌曲是否有版权
                    if ( !r ){
                        Modal.warning({
                            title: record.name,
                            content: '此歌曲版权，请播放下一首歌曲',
                        })
                        // 无版权 就不再往下执行
                        return false
                    }

                    // 播放音乐
                    commit('playMusic')

                },
            }
        }

        // 单选 选中
        const state = reactive({
            selectedRowKeys: [],
        })
        const onSelectChange = selectedRowKeys => {
            // console.log('selectedRowKeys changed: ', selectedRowKeys);
            state.selectedRowKeys = selectedRowKeys
        }

        const getSongListData = async () => {
            loading.value = true
            try {

                if (props.id){

                    const res = await $axios.get('/api/playlist/detail?id=' + props.id)
                    songList.songList = res.data.playlist['tracks']
                }
                if(!isNaN(props.type)){

                    const res = await $axios.get('/api/top/song?type='+props.type)
                    // console.log(res)

                    songList.songList = res.data.data
                }
                loading.value = false


            } catch (e) {
                console.log(e)
            }

        }

        watchEffect(()=>{
            getSongListData()
        })



        return {
            columns,
            loading,
            customRow,
            ...toRefs(songList),
            ...toRefs(state),
            onSelectChange,
        }
    }
}
</script>

<style scoped>

</style>
