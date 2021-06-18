<template>
    <div class="page-video">
        <a-popover
            trigger="click"
            placement="bottomLeft"
            arrow-point-at-center
        >
            <template v-slot:content>
                <div class="cate-area">
                <span class="cates">
                    <template
                        v-for="(cate,index) in videoCate"
                        :key="cate.id"
                    >
                        <span
                            v-if="index>=30"
                            class="cate"
                            :class="{ current: cate.id === groupId }"
                            @click="selectCate(cate)"
                        >
                            {{ cate.name }}
                        </span>
                    </template>
                </span>
                </div>
            </template>

            <a-button size="small" style="font-size: 12px; margin: 12px 0">
                {{ 'currentCateName' }}
                <DownOutlined />
            </a-button>
        </a-popover>
    </div>
</template>

<script>
import {ref,reactive,toRefs,computed,watchEffect} from "vue"

export default {
    name: "VideoPage",
    setup(){
        const videoData = reactive({
            videoCate:[],
            groupId: 5100,
            cates: []
        })

        const getVideoCate = async ()=>{
            const res = await $axios.get('/api/video/group/list')

            videoData.videoCate = res.data.data
        }
        getVideoCate()



        // 选中 添加class
        const selectCate = (cate)=>{
            videoData.groupId = cate.id
        }
        return {
            ...toRefs(videoData),
            selectCate,
        }
    }
}
</script>

<style lang="less" scoped>

@primary-color: #c62f2f;

.grid-layout(@gridGap:20px,@min:220px,@max:1fr) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(@min, @max));
    grid-gap: @gridGap;
}


    .videos {
        .grid-layout(15px, 220px);
        padding: 15px 0;
        .video {
            .media-wrap {
                position: relative;
                padding-top: 56%;
                overflow: hidden;
                .avatar {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                    border: 1px solid #ddd;
                }
            }
            .title {
                font-size: 13px;
                color: #333;
            }
        }
    }


.cates {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    .cate {
        display: inline-block;
        width: 20%;
        border: 1px solid #f3f5f7;
        line-height: 33px;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        &.current {
            background: @primary-color;
            color: #fff;
            border-color: @primary-color;
        }
    }
}

</style>
<style >

.ant-popover-placement-bottomLeft{
    width: 540px !important;
}
/*.user-wrapper >>> .ant-popover-inner-content {*/
/*    max-height: 400px;*/
/*    overflow-y: auto;*/
/*}*/


/*.user-wrapper >>> .ant-popover-title {*/
/*    padding: 15px;*/
/*}*/
</style>
