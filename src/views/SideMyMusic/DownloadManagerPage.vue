<template>
    <h1>下载管理</h1>
    <div class="DownloadManager">
        <a-tabs type="card">
            <a-tab-pane key="1" tab="已下载单曲">
                <h1>已下载单曲</h1>
            </a-tab-pane>
            <a-tab-pane key="2" tab="正在下载" >正在下载</a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
export default {
    name: "DownloadManager",

}
</script>

<style lang="less" scoped>
.DownloadManager{
    text-align: center;

    /deep/ .ant-tabs-tab{
        border: 1px solid #ddd !important;
    }

    /deep/ .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
        color: #fff;
        background: #c62f2f;
        border: none;
    }
    ///deep/ .ant-tabs-nav .ant-tabs-tab:hover{
    //    color: #333;
    //}
}


</style>
