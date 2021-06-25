<template>
    <a-button-group size="small">
        <a-button  @click="back">
            <LeftOutlined twoToneColor="#d45955"/>
        </a-button>
        <a-button  @click="forward">
            <RightOutlined twoToneColor="#d45955"/>
        </a-button>
        <a-button  @click="refresh">
            <ReloadOutlined twoToneColor="#d45955"/>
        </a-button>
    </a-button-group>
</template>

<script>

import {useRouter,} from "vue-router"

export default {
    name: "HistoryActionButton",
    setup(){
        const Router = useRouter()

        const back = ()=>Router.go(-1)
        const forward = ()=>Router.go(1)
        const refresh = ()=>Router.go(0)

        return {
            back,
            forward,
            refresh,
        }
    }
}
</script>

<style lang="less" scoped>
.ant-btn {
    background: #c62f2f;
    background: transparent;
    color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.ant-btn-primary{
    background-color: #d45955;
    border-color: #d45955;
}
.ant-btn-group .ant-btn-primary:first-child:not(:last-child) {
    border-right-color: #d45955;
}

.ant-btn:hover, .ant-btn:focus, .ant-btn:active, .ant-btn.active{
    color: #40a9ff;
    background: none !important;
    border-color: #40a9ff;
}
</style>
