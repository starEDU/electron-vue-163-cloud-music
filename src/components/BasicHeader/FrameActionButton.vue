<template>
    <div class="frame-actions">
        <ShrinkOutlined class="item" @click="setFrame('mini')"/>

        <MinusOutlined class="item" @click="setFrame('min')" />

        <BorderOutlined class="item" v-if="!isMax"/>
        <SwitcherOutlined class="item" v-else/>

        <CloseOutlined class="item" @click="setFrame('close')"/>
    </div>
</template>

<script>
import {ref} from "vue"


export default {
    name: "FrameActionButton",
    setup(){
        const isMax = ref(false)

        const setFrame = ()=>{}

        return {
            setFrame,
            isMax,
        }
    }
}
</script>

<style lang="less" scoped>
.frame-actions {
    display: flex;
    align-items: center;
    margin-right: 10px;
    -webkit-app-region: no-drag;

    &::before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 20px;
        margin-right: 8px;
        background: #ddd;
    }

    .item {
        padding: 0 4px;
        line-height: 54px;
        height: 50px;
        vertical-align: unset;
        font-size: 18px;
        cursor: pointer;
    }
}
</style>
