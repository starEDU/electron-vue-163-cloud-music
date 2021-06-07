<template>
    <h2>设置</h2>
    <button @click="goBack"> back </button>
</template>

<script>
import {useRouter} from "vue-router"

export default {
    name: "Setting",
    setup(){
        const Router = useRouter()

        const goBack = ()=>{
            Router.goBack()
        }

        return {
            goBack,
        }
    }
}
</script>

<style scoped>

</style>
