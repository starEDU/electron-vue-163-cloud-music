<template>
<div class="page-playlist">

    <Tags :tags="{'热门标签':tags}" @change="onTagChange"/>

    <ul class="playlists" >
        <router-link
            tag="li"
            to="/playlist-highquality"
            class="list-item"
        >
            <img
                class="avatar"
                src="@/assets/images/playlist-top.png"
                alt=""
             />
            <div>精品歌单精心推荐,给最懂音乐的你</div>
        </router-link>
        <ListItem
            class="list-item"
            v-for="item in playlists.playlists"
            :item="item"
            :key="item.id"
        />
    </ul>
    <div class="page">
        <a-pagination
            :total="playlists['total']"
            @change="onPaginationChange"
            show-quick-jumper
        />
    </div>
</div>
</template>

<script>
import {reactive,ref,watchEffect,} from "vue"
import ListItem from "@/components/BasicContent/Personalized/ListItem"
import Tags from "@/components/BasicContent/SongSheet/Tags"

export default {
    name: "SongSheetPage",
    components: {Tags, ListItem},
    setup(){
        const playlists = reactive({})
        const cat = ref('华语')
        const pagination =  reactive({
            limit: 50,
            offset: 0,
            order: 'hot',
        })
        const tags = reactive([])

        const onTagChange = (tag)=>{
            cat.value = tag.name
        }

        async function getSongSheetList(){
            const res1 = await $axios.get(
                `/api/top/playlist?cat=${cat.value}&limit=50&offset=${pagination.offset}`
            )
            console.log(res1.data)
            Object.assign(playlists,res1.data)
        }

        async function getSongSheetHot(){
            const res2 = await $axios.get(`/api/playlist/hot`)
            tags.push(...res2.data.tags)
        }

        watchEffect( ()=>{
            getSongSheetHot()
        })

        watchEffect(()=>{
            getSongSheetList(cat.value)
        })

        const onPaginationChange = (page,pageSize)=>{
            // console.log(page,pageSize)
            pagination.offset = page
        }

        return {
            playlists,
            onTagChange,
            pagination,
            tags,
            onPaginationChange,
        }
    }
}
</script>

<style lang="less" scoped>
.grid-layout(@gridGap:20px,@min:220px,@max:1fr) {
    // 网格布局文档 http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(@min, @max));
    grid-gap: @gridGap;
}

.ant-tag-checkable-checked{
    background: #c62f2f;
}

.page-playlist {
    padding: 15px 20px;
    .playlists {
        .grid-layout(20px, 160px);

        .list-item:first-child{
            color: rgba(0,0,0,0.85);
        }
    }
}

.cate-area {
    display: flex;
    margin: 12px 0;
    .cate-label {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 100px;
        width: 100px;
        height: 33px;
        color: #c62f2f;
        font-size: 16px;
        .anticon {
            font-size: 24px;
            margin-right: 5px;
        }
    }
    .cates {
        flex: 1;
        .cate {
            display: inline-block;
            width: 98px;
            border: 1px solid #f3f5f7;
            line-height: 33px;
            text-align: center;
            font-size: 12px;
            &.current {
                background: #c62f2f;
                color: #fff;
                border-color: #c62f2f;
            }
        }
    }
}

.list-item {
    cursor: pointer;
    .avatar {
        display: block;
        width: 100%;
    }
}

.page {
    margin: 15px auto;
    text-align: center;
}


.cate-wrapper .ant-popover-inner-content {
    max-height: 400px;
    overflow-y: auto;
}

.cate-wrapper .ant-popover-title {
    padding: 15px;
}
</style>
