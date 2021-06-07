<template>
    <a-popover placement="bottom" arrow-point-at-center trigger="click">
        <template #content>
            <ul class="colorBlock">
                <li
                    class="color-item"
                    v-for="(item, index) in colorLists"
                    :key="index"
                    :style="'background-color: ' + item.color"
                    @click="changeColor(item.color,$event)"
                >
                    <div class="name">{{ item.key }}</div>

                    <CheckCircleOutlined
                        class="a-icon"
                        :style="'background-color: ' + item.color"
                        v-if="primaryColor === item.color"
                    />
                </li>
            </ul>
        </template>

        <SkinOutlined style="font-size: 16px"/>
    </a-popover>
</template>

<script>
import {reactive, ref} from "vue"

import {colorList} from "@/common/colorList"

export default {
    name: "ThemeSet",
    setup(){
        const colorLists = reactive(colorList)
        const primaryColor = ref('#c62f2f')

        const changeColor = (color)=>{
            console.log(color)
            primaryColor.value = color
        }

        return {
            colorLists,
            changeColor,
            primaryColor,
        }
    }
}
</script>

<style lang="less" scoped>
.colorBlock {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .color-item {
        position: relative;
        width: 60px;
        height: 60px;
        cursor: pointer;
        margin-bottom: 10px;
        color: #fff;
        .name {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding-left: 4px;
            line-height: 20px;
            background: rgba(0, 0, 0, 0.2);
            font-size: 11px;
        }
        .a-icon {
            position: absolute;
            right: -6px;
            bottom: -6px;
            font-size: 22px;
            border-radius: 50%;
            color: #fff;
        }
        .z-icon {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
            opacity: 0.9;
        }
    }
}
</style>
