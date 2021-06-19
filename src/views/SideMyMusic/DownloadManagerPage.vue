<template>

    <div class="DownloadManager">
        <a-tabs type="card">
            <a-tab-pane key="1" tab="已下载单曲">
                <a-button type="primary" @click="playAll">
                    <template #icon><PlayCircleOutlined /></template>
                    播放全部
                </a-button>
                <span class="downloadDir">存储目录: {{downloadDir}}</span>
                <span class="openDir" @click="openDir">打开目录</span>

                <a-divider style="background: #ccc"/>

                <TableDataComp :song-list="songList"/>

            </a-tab-pane>

            <a-tab-pane key="2" tab="正在下载">
                <a-progress
                    :stroke-color="{
                        '0%': '#108ee9',
                        '50%': '#fa0',
                        '100%': '#87d068',
                    }"
                    :percent="90"
                    status="active"
                />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import {shell,app,} from "@electron/remote"
import {reactive, ref, toRefs,} from "vue"
import TableDataComp from "@/components/Global/TableDataComp"

export default {
    name: "DownloadManager",
    components: {TableDataComp},
    setup(){
        const downloadDir = app.getPath('music')
        const openDir = ()=>{
            shell.openPath(downloadDir)
        }
        const songList = reactive({
            songList: [
                {
                    id: 123456,
                    name: 'Love Story',
                    ar: [{name:'Taylor'},{name:'Swift'}],
                    al: {name:'Fearless(Taylor version)'},
                    size: 1234567,
                    downloadTime: new Date(),
                    dt: 125000,
                    dir: ()=><FolderOutlined  style="cursor:pointer;"/>
                },
            ],
        })

        const playAll = () => {

        }

        return {
            downloadDir,
            openDir,
            ...toRefs(songList),
            playAll,
        }
    }
}
</script>

<style lang="less" scoped>
@primary-color: #c62f2f;

.DownloadManager{
    text-align: center;
    padding: 20px 20px 0;

    .downloadDir{
        margin: 0 10px;
    }
    .openDir{
        color: red;
        cursor: pointer;
    }

    /deep/ .ant-btn-primary{
        background: @primary-color;
    }

    /deep/ .ant-tabs-top-content{
        text-align: left;
    }

    /deep/ .ant-tabs-tab{
        border: 1px solid #ddd !important;
    }

    /deep/ .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
        color: #fff;
        background: @primary-color;
        border: none;
    }
    ///deep/ .ant-tabs-nav .ant-tabs-tab:hover{
    //    color: #333;
    //}
}


</style>
