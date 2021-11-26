<template>
    <div class="playlist">
        <ul class="list">
            <li
                class="list-item"
                @click="goLink"
            >
                <div class="date">
                    <div class="info">
                        <div class="week">{{ getWeek() }}</div>
                        <div class="day">{{ getDate() }}</div>
                    </div>
                </div>
                <div class="name">每日歌曲推荐</div>
            </li>
            <ListItem
                class="list-item"
                v-for="item in songSheetList"
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
    </div>
</template>

<script>

import {reactive,onMounted,} from "vue"
import {useRouter,} from "vue-router"


import ListItem from "@/components/BasicContent/Personalized/ListItem"
import {api} from "@/utils/baseProxy"


export default {
    name: "SongSheet",
    components: {ListItem},
    props: ['userId'],
    setup(){
        const Router = useRouter()

        const songSheetList = reactive([])

        const getWeek = () => {
            return "星期" + "日一二三四五六".charAt(new Date().getDay())
        }

        const goLink = ()=>{
            Router.push({path: '/recomment_songs'})
        }

        const getDate = ()=>{
            return new Date().getDate()
        }

        onMounted(()=>{
            (async ()=>{
                const res = await $axios.get(api + '/personalized?limit=9')
                songSheetList.push(...res.data.result)
            })()
        })

        return {
            songSheetList,
            getWeek,
            goLink,
            getDate,
        }
    }
}
</script>

<style lang="less" scoped>
@gutter: 1%;
.list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 -@gutter;
    .list-item {
        width: 18%;
        margin-left: @gutter;
        margin-right: @gutter;
        margin-bottom: 5px;
        cursor: pointer;
        .date {
            position: relative;
            padding-top: 100%;
            border: 1px solid #eee;
            .info {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                line-height: 1;
                background: #fff;
                color: #333;
                font-size: 20px;
                font-weight: bold;

                .week {
                    //font-size: 0.15em;
                }
                .day {
                    //font-size: 0.56em;
                    color: #c62f2f;
                }
            }
        }
        .name {
            padding: 4px;
            font-size: 13px;
        }
        &:hover {
            .copywriter {
                transform: translateY(0);
            }
            /deep/ .top {
                display: none;
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
