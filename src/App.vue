<template>
  <router-view/>
    <audio ref="audioEle"></audio>
</template>

<script>
import {ref,onMounted,} from "vue"

import {useStore} from "vuex"


export default {
    name: 'App',
    setup(){
        const {commit,} = useStore()
        const audioEle = ref(null)
        let timer = null

        // 获取总时间
        const getDuration = ()=>{
            timer = setTimeout(()=>{
                clearTimeout(timer)
                let duration = audioEle.value.duration
                console.log(duration)
                if ( isNaN(duration) ){
                    getDuration()
                }else {

                    commit('setDuration',duration)
                    clearTimeout(timer)
                }
            },100)
        }

        // 持续不断获取当前时间
        const getCurrentTime = ()=>{
            audioEle.value.ontimeupdate = ()=>{
                // console.log(audioEle.value.currentTime)
                commit('setCurrentTime',audioEle.value.currentTime)
            }
        }

        onMounted(()=>{
            commit('setAudioEle',audioEle.value )

            audioEle.value.addEventListener('play',()=>{
                console.log('play')
                getDuration()
                getCurrentTime()
            })

        })

        return {
            audioEle,
        }
    }
}
</script>

<style lang="less">
@import "./assets/css/cssreset.css";
@import "./assets/css/common.less";

</style>
