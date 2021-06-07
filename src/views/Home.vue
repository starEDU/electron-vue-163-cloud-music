<template>
    <a-layout class="basic-layout">
        <a-layout-header
            class="basic-layout-header"
            :class="{ 'basic-layout-header-mac': platform === 'darwin' }"
        >
            <BasicHeaderIndex />
        </a-layout-header>
        <a-layout>
            <a-layout-sider class="basic-layout-sider" :width="siderWidth">
                <div ref="handle" class="split-handle"></div>
<!--                <basic-sider />-->
                <h2>侧边栏</h2>
            </a-layout-sider>
            <a-layout-content class="basic-layout-content">
<!--                <keep-alive
                    :exclude="keepAliveExcludeList"
                    v-if="isOnline || noLimitRoutes.includes($route.name)"
                >
                    <router-view v-if="!refresh"></router-view>
                </keep-alive>-->
            <!-- <offline v-else />-->
                <h3>右边内容</h3>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        <a-layout-footer class="basic-layout-footer">
        <!--  <play-bar />-->
            <h3>播放控制条</h3>
        </a-layout-footer>

        <!--
            <login />
            <player />
        -->
    </a-layout>
</template>

<script>

import BasicHeaderIndex from "@/components/BasicHeader/BasicHeaderIndex"


export default {
    name: 'Home',
    components: {BasicHeaderIndex},
    setup(){

        return {
            platform: process.platform,
            siderWidth: 200,
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
        border-top: 1px solid #ddd;
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
        overflow-y: hidden;

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
