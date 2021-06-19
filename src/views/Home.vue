<template>
    <a-layout class="basic-layout">
        <a-layout-header
            class="basic-layout-header"
            :class="{ 'basic-layout-header-mac': platform === 'darwin' }"
        >
            <BasicHeaderIndex />
        </a-layout-header>
        <a-layout>
            <a-layout-sider class="basic-layout-sider" :width="sideWidth">
                <div ref="dragSideSize" class="split-handle"></div>
                <!--<h2>侧边栏</h2>-->
                <BasicSiderIndex />
                <!--<h2>侧边栏</h2>-->

            </a-layout-sider>
            <a-layout-content class="basic-layout-content">
                <!--
                    <keep-alive
                        :exclude="keepAliveExcludeList"
                        v-if="isOnline || noLimitRoutes.includes($route.name)"
                    ></keep-alive>
                -->
                <!-- <offline v-else />-->
                <!--<h3>右边内容</h3>-->
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        <a-layout-footer class="basic-layout-footer">
            <BottomPlayBar />
        </a-layout-footer>

        <!--
            <login />
            <player />
        -->
    </a-layout>
</template>

<script>
import {onMounted,reactive,ref,onUnmounted,} from "vue"

import throttle from "loadsh/throttle"


import BasicHeaderIndex from "@/components/BasicHeader/BasicHeaderIndex"
import BasicSiderIndex from "@/components/BasicSider/BasicSiderIndex"
import BottomPlayBar from "@/components/Global/BottomBar/BottomPlayBar"


export default {
    name: 'Home',
    components: {BottomPlayBar, BasicSiderIndex, BasicHeaderIndex,},
    setup(){
        const mouse = reactive({})
        const dragSideSize = ref(null)
        let appEle = null

        const sideDefaultWidth = 200
        const sideWidth = ref(sideDefaultWidth)
        const sideMaxWidth = ref(400)

        onMounted(()=>{
            appEle = document.getElementById("app")

            dragSideSize.value.onmousedown = (e) => {
                mouse.isDown = true
                mouse.startX = e.pageX
            }
            appEle.onmousemove = throttle(
                (e) => {
                    if (!mouse.isDown) return
                    let diffX = e.pageX
                    if (diffX < sideDefaultWidth || diffX > sideMaxWidth.value) return
                    sideWidth.value = diffX
                },
                100,
                { trailing: true, leading: true }
            );
            appEle.onmouseup = () => {
                mouse.isDown = false;
            };

        })

        onUnmounted(()=>{
            dragSideSize.value = null
            appEle.dragSideSize = null
            appEle.onmousemove = appEle.onmouseup = null
        })

        return {
            platform: process.platform,
            siderWidth: 200,
            dragSideSize,
            sideWidth,
        }
    }
}
</script>


<style lang="less" scoped>


.basic-layout {
    height: 100vh;

    .basic-layout-header,
    .basic-layout-footer {
        height: 50px;
        line-height: 50px;
        padding: 0;
        z-index: 22;
        position: relative;
    }

    .basic-layout-header {
        box-sizing: content-box;

        &.basic-layout-header-mac {
            padding-top: 20px;
        }
    }

    .basic-layout-footer {
        //border-top: 1px solid #ddd;
        box-shadow: 0px -2px 15px #bbb;
    }

    .basic-layout-header {
        background: #c62f2f;
        color: #eee;
        -webkit-app-region: drag;
    }

    .basic-layout-sider {
        position: relative;
        background: none;
        box-shadow: none;
        overflow-x: hidden;
        overflow-y: auto;

        .split-handle {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 999;
            height: 100%;
            width: 5px;
            border-right: 1px solid #ddd;
            cursor: col-resize;
        }
    }

    .basic-layout-content {
        background: #f5f5f7;
    }
}


</style>
