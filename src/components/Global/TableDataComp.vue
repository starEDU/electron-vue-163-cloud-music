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
import {ref,reactive,toRefs,} from "vue"
import secondFormat from "second-format"
import moment from "moment"


export default {
    name: "TableDataComp",

    props: {
        songList: {
            type: Array,
            default: [],
        }
    },
    setup(){
        // const songList = reactive({
        //     songList: []
        // })
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
                    return text ? getSinger(text) : getSinger(record['artists'])
                }
            },
            {
                title: "专辑",
                dataIndex: "al",
                customRender: ({text, record, index}) =>{

                    return text ? text.name : record['album']
                }
            },
            {
                title: "大小",
                dataIndex: "size",
                customRender: ({text, record, index}) =>{
                    return formatSize(text)
                }
            },
            {
                title: "下载时间",
                dataIndex: "downloadTime",
                customRender: ({text, record, index}) =>{
                    return moment(text).format('YYYY-MM-DD HH:MM:SS')
                }
            },
            {
                title: "时长",
                dataIndex: "dt",
                customRender: ({text, record, index}) =>{
                    return secondFormat(text/1000)
                }
            },
            {
                title: "目录地址",
                dataIndex: "dir",
                customRender: ({text, record, index}) =>{
                    return text()
                }
            },
        ]
        const formatSize = (bytes, isUnit=true) => {
            const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
            isUnit = isUnit ?? true

            if (bytes === 0) {
                return isUnit ? '0B' : '0'
            }

            const i = Math.floor(Math.log(bytes) / Math.log(1024))
            if (i === 0) {
                return bytes + (isUnit ? sizes[i] : '')
            }
            return (bytes / 1024 ** i).toFixed(2) + (isUnit ? sizes[i] : '')
        }

        // 处理歌手数组
        const getSinger = (val) => {

            const nameArr = val.map((item)=>{
                return item.name
            })
            return nameArr.join(',')

        }
        const loading = ref(false)

        // 单选 选中
        const state = reactive({
            selectedRowKeys: [],
        })
        const onSelectChange = selectedRowKeys => {
            state.selectedRowKeys = selectedRowKeys;
        }
        // 双击选中
        const customRow = (record, index) => {
            return {
                onDblclick: (event) => {
                    console.log(record, index)
                    state.selectedRowKeys = [record.id]
                },
            }
        }

        return {
            columns,
            // ...toRefs(songList),
            loading,
            ...toRefs(state),
            onSelectChange,
            customRow,
        }
    }
}
</script>

<style lang="less" scoped>

</style>
