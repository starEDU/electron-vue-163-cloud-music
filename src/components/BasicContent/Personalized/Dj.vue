<template>
    <div class="dj">
        <ul class="list">
            <DjItem
                class="list-item"
                v-for="item in list.slice(0, 6)"
                :dj="item"
                :key="item.id"
            />
        </ul>
    </div>
</template>

<script>
import {reactive,onMounted,} from "vue"
import DjItem from "@/components/BasicContent/Personalized/DjItem"

export default {
    name: "Dj",
    components: {DjItem},
    setup(){
        const list = reactive([])

        onMounted(async ()=>{
            const res = await $axios.get('/api/dj/hot')
            // console.log(res.data.djRadios)
            list.push(...res.data.djRadios)
        })



        return {
            list,
        }
    }
}
</script>

<style lang="less" scoped>
.list {
    display: flex;
    justify-content: space-between;
    .list-item {
        width: 15%;
    }
}
</style>
