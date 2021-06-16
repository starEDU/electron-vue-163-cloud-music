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
import {ref,onMounted,reactive,watchEffect,toRefs,} from "vue"
import secondFormat from "second-format"
import {useRoute,} from "vue-router"


export default {
    name: "SongListTable",
    setup(){
        const Route = useRoute()

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
                dataIndex: "ar",
                customRender: ({text, record, index}) =>{
                    return getSinger(text)
                }
            },
            {
                title: "专辑",
                dataIndex: "al",
                customRender: ({text, record, index}) =>{
                    return text.name
                }
            },
            {
                title: "时长",
                dataIndex: "dt",
                customRender: ({text, record, index}) =>{
                    return secondFormat(text/1000)
                }
            },
        ]

        const loading = ref(false)

        // 处理歌手数组
        const getSinger = (val) => {
            const nameArr = val.map((item)=>{
                return item.name
            })
            return nameArr.join(',')
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
            // console.log('selectedRowKeys changed: ', selectedRowKeys);
            state.selectedRowKeys = selectedRowKeys;
        }

        const getSongListData = async ()=>{
            loading.value = true
            try {
                const res = await $axios.get('/api/playlist/detail?id='+2829816518)
                songList.songList = res.data.playlist.tracks
                loading.value = false
            }catch (e) {
                console.log(e)
            }

        }
        getSongListData()

        console.log(secondFormat(235766/60/60))
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
