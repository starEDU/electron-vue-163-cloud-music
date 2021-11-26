<template>
    <div class="mv">

        <ul class="list">
            <ListItem
                item-type="mv"
                :ratio="0.56"
                class="list-item"
                v-for="item in list"
                :item="item"
                :key="item.id"
            >
                <template v-slot:copywriter>
                    <div
                        class="copywriter"
                        v-if="item.copywriter"
                    >{{ item.copywriter }}</div>
                </template>
            </ListItem>
        </ul>

        <a-divider></a-divider>
    </div>
</template>

<script>

import {reactive,onMounted,} from "vue"


import ListItem from "@/components/BasicContent/Personalized/ListItem"
import {api} from "@/utils/baseProxy"

export default {
    name: "MV",
    components: {ListItem},
    setup(){
        const list = reactive([])
        const obj = reactive({})


        onMounted(async ()=>{
            const res = await $axios.get(api + '/personalized/mv')
            // 数据 push的方式 触发页面更新
            list.push(...res.data.result)

            // 不能这么写，这样重新赋值后会，obj会变成普通对象,失去响应式的效果;
            // obj = {a:1,b:2}

            // Object.assign(obj,{a:123,b:456})
        })


        return {
            list,
            obj,
        }
    }
}
</script>

<style lang="less" scoped>
@gutter: 1%;

.mv{
    width: 100%;
    //height: 240px;
}

.list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 -@gutter;
    .list-item {
        cursor: pointer;
        width: 23%;
        margin-left: @gutter;
        margin-right: @gutter;
        &:hover {
            /deep/ .top {
                display: none;
            }
            .copywriter {
                transform: translateY(0);
            }
        }
        .copywriter {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            padding: 6px;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
            transform: translateY(-100%);
            transition: all 0.3s;
        }
    }
}

</style>
