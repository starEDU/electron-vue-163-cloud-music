<template>
<div class="page-playlist">

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
</div>
</template>

<script>
import {reactive,onMounted,ref,} from "vue"
import ListItem from "@/components/BasicContent/Personalized/ListItem"

export default {
    name: "SongSheetPage",
    components: {ListItem},
    setup(){
        const playlists = reactive({})
        const cat = ref('')
        const pagination =  reactive({
            limit: 29,
            offset: 0,
            order: 'hot',
        })

        onMounted(async ()=>{
            const res = await $axios.get(`/api/top/playlist?cat=${'华语'}`)

            //const r = Object.assign(playlists,...res.data)
            Object.assign(playlists,res.data)
            console.log(res)
        })

        return {
            playlists,
        }
    }
}
</script>

<style lang="less" scoped>
.grid-layout(@gridGap:20px,@min:220px,@max:1fr) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(@min, @max));
    grid-gap: @gridGap;
}

.page-playlist {
    padding: 15px 0;
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
