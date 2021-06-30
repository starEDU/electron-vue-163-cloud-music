<template>
    <div v-if="audioInfo.pic" class="BottomSideFullScreen" :style="{width:sideWidth+'px',}">
        <div class="audioAvatar" ref="audioAvatar">
        <!--
            <a-avatar shape="square" :size="50">
                <template #icon>
                    <UserOutlined />
                </template>
            </a-avatar>
            -->
            <a-avatar
                shape="square"
                :size="50"
                :src="audioInfo.pic"
            />

            <div class="full-screen" v-if="isShowFullScreenIcon" @click="handleFullscreen">
                <FullscreenOutlined style="color: #fff;font-size: 30px"/>
            </div>
        </div>
        <div class="audioInfo">
            <span class="name">{{audioInfo.name}}</span>
            <span class="singer">{{ audioInfo.author }}</span>
        </div>
    </div>
</template>

<script>
import {ref,onMounted,toRefs,} from "vue"

import {useStore,} from "vuex"


export default {
    name: "BottomSideFullScreen",
    props: ['sideWidth'],
    setup(props,context){
        const {state,} = useStore()

        // console.log(context)
        const {emit} = context
        const audioAvatar = ref(null)
        const isShowFullScreenIcon = ref(false)

        onMounted(()=>{
            audioAvatar.value.addEventListener('mouseover',()=>{
                isShowFullScreenIcon.value = true
            })
            audioAvatar.value.addEventListener('mouseleave',()=>{
                isShowFullScreenIcon.value = false
            })
        })

        const handleFullscreen = ()=>{
            emit('isFullScreen',{width: '100vw',height: '100vh'})
        }

        return {
            audioAvatar,
            isShowFullScreenIcon,
            handleFullscreen,
            ...toRefs(state),
        }
    }
}
</script>

<style lang="less" scoped>
.BottomSideFullScreen{
    position: fixed;
    left: 0;
    bottom: 50px;
    z-index: 1000;
    overflow: hidden;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
    background: #fff;

    display: flex;
    justify-content: space-between;
    font-size: 12px;

    .audioAvatar{
        position: relative;
        margin-right: 5px;

        .ant-avatar{
            width: 50px !important;
            height: 50px !important;
        }

        .full-screen{
            position: relative;
            bottom: 50px;
            left: 0;
            z-index: 999;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            overflow: hidden;

            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer ;

        }


    }

    .audioInfo{
        flex: 1;
        display: inherit;
        flex-direction: column;
        justify-content: space-around;

        .name{}
        .singer{

        }
    }


}


</style>
