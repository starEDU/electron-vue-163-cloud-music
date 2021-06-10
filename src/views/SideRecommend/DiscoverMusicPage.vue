<template>
    <DiscoverMusicContentSlot>

        <div class="floors" v-if="isRenderFinish">

        </div>

        <div class="loading-wrapper-center" v-else>
            <Loading  text="正在为您生成个性化设置..." />
        </div>

        <template v-slot:footer>
            <footer class="wy-footer">
                <p>现在可以根据个人喜好,自由调整首页栏目顺序啦~</p>
                <a-button type="danger" ghost >调整栏目顺序</a-button>
            </footer>
        </template>


    </DiscoverMusicContentSlot>
</template>

<script>
import {ref} from "vue"


import DiscoverMusicContentSlot from "@/components/BasicContent/DiscoverMusicContentSlot"

export default {
    name: "DiscoverMusicPage",
    components: {DiscoverMusicContentSlot},
    setup(){
        const isRenderFinish = ref(false)
        const visible = ref(true)

        return {
            isRenderFinish,
            visible,
        }
    }
}
</script>

<style lang="less" scoped>

.floors {
    padding-top: 20px;

    a {
        font-size: 13px;
        color: #888;
    }

    /deep/ .ant-card-head {
        padding: 0;
        min-height: 32px;
        font-size: 18px;
        font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont,
        "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
        "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";

        /deep/ .ant-card-head-title {
            padding: 0;
        }

        /deep/ .ant-card-extra {
            padding: 0;
        }
    }

    /deep/ .ant-card-body {
        padding: 10px 0;
    }
}

.wy-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: auto;
    border-top: 1px solid #eee;
}

.drag-item {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
    border-bottom: 1px solid #f3f3f3;
    font-size: 18px;
    cursor: move;
}

.reset {
    text-align: center;
    display: block;
    margin: 15px 0;
    text-decoration: underline;
    color: #999;
}


</style>
