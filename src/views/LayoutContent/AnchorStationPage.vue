<template>
    <Loading  :text="text" />
</template>

<script>
import {ref,onUnmounted,} from "vue"

export default {
    name: "AnchorStationPage",
    setup(){
        const text = ref('正在为您生成个性化设置...')

        const timer = setTimeout(()=>{
            clearTimeout(timer)
            text.value = '没时间写了, 自行构建吧...'
        },3000)

        onUnmounted(()=>{
            clearTimeout(timer)
        })

        return {
            text,
        }
    }
}
</script>

<style scoped>

</style>
