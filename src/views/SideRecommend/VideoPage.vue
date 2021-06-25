<template>
    <div ref="videoList" class="page-video">
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
                {{ currentCateName }}
                <DownOutlined />
            </a-button>
        </a-popover>

        <a-divider />

        <div  class="videos" >
            <VideoItem
                v-for="(video, index) in videos"
                :video="video.data"
                :key="`${video.id}_${index}`"
                :showCreator="false"
            />
        </div>

        <a-button type="primary" :loading="loading" @click="loadingGetVideo"> 加载更多</a-button>

    </div>
</template>

<script>
import {ref,reactive,toRefs,onMounted,onUnmounted,watch,watchEffect} from "vue"


import VideoItem from "@/components/BasicSider/VideoItem"

export default {
    name: "VideoPage",
    components:{VideoItem,},
    setup(){
        const videoData = reactive({
            videoCate:[],
            groupId: 5100,
            currentCateName: '音乐',
            videos: [],

            hasmore: false,
            loading: false
        })
        const videoList = ref(null)

        // 视频分类
        const getVideoCate = async ()=>{
            const res = await $axios.get('/api/video/group/list')
            if ( res.data.data.length ){
                videoData.videoCate = res.data.data
                videoData.page ++
            }
        }
        getVideoCate()

        // 视频列表
        const getVideo = async ()=>{
            try {
                const res = await $axios.get('/api/video/group?id='+videoData.groupId+'&_='+new Date().getTime())
                const list = res.data.datas

                if ( videoData.hasmore ){
                    list.forEach((item)=>{
                        videoData.videos.push(item)
                    })
                }else {
                    videoData.videos = list
                }

            }catch (err){
                console.log(err)
            }
        }
        videoData.hasmore = true
        getVideo()
        // watchEffect(()=>{
        //     // $axios.get('/api/login/cellphone?phone=15821356189&password=1q2w3e4r').then(res=>console.log(res))
        //     // getVideo(videoData.groupId)
        // })

        watch(()=>videoData.groupId,()=>{
            getVideo()
        })

        const handleScroll = (e) => {
            if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
                //在此处放入你的加载更多方法
                // console.log(123)
                videoData.hasmore = true
                getVideo()
            }
        }

        const loadingGetVideo = ()=>{
            videoData.hasmore = true
            getVideo()
        }

        onMounted(()=>{
            getVideo()

            window.addEventListener('scroll', handleScroll, true);
            // 滚动的容器
            /*
            const el = videoList.value
            const offsetHeight = el.offsetHeight
            el.onscroll = () => {
                const scrollTop = el.scrollTop
                const scrollHeight = el.scrollHeight
                if (offsetHeight + scrollTop - scrollHeight >= -1) {
                    // 需要执行的代码
                    console.log('已滚动到底部')
                    videoData.hasmore = true
                    // 调用list 原本的数据请求函数
                    getVideo(videoData.groupId)
                }
            }
            */
        })

        onUnmounted(()=>{
            window.removeEventListener('scroll', handleScroll);
        })

        // 选中 添加class
        const selectCate = (cate)=>{
            videoData.groupId = cate.id
            videoData.currentCateName = cate.name
            videoData.hasmore = false
        }
        return {
            ...toRefs(videoData),
            selectCate,
            videoList,
            getVideo,
            loadingGetVideo,
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

.page-video{
    padding: 0 20px;
    height: 100%;
    overflow: auto;
}

    .videos {
        .grid-layout(15px, 220px);
        .video {
            .media-wrap {
                position: relative;

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
