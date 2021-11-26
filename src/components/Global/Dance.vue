<template>
    <div class="Dance">
        <CloseCircleOutlined
            spin
            :style="iconStyle"
            @click="danceLyric"
        />
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import {onMounted, ref,} from "vue"
import {useStore,} from "vuex"

// import {danceAudio} from "@/utils/danceAudio"
import {cryptoDanceAudio} from "@/utils/cryptoDanceAudio"

export default {
    name: 'Dance',
    setup(){
        const canvas = ref(null)
        const {state,commit} = useStore()
        const url = 'http://m7.music.126.net/20210922215458/3e84dd8cfca200af2c414df268a0964f/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3047366729/c22a/6e45/ff05/31dbb8ef2bffa556d44aa24306e0ce1f.mp3'

        onMounted(()=>{
            setTimeout(()=>{
                // danceAudio(state.audioEle,canvas.value,url)
                // eval((atob(cryptoDanceAudio)(state.audioEle,canvas.value,url)))
                eval(atob(cryptoDanceAudio))(state.audioEle,canvas.value,url)
            },600)
        })

        const danceLyric = ()=>{
            commit('danceLyric')
        }

        return {
            canvas,
            iconStyle: {
                position: 'absolute',
                right: '20px',
                top: '20px',
                color: 'rgba(255,255,255,0.3)',
                fontSize: '24px',
                cursor: 'pointer',
            },
            danceLyric,
        }
    }
}

</script>

<style lang="less" scoped>
.Dance{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    //background-color: hotpink;
}
</style>
