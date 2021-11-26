import { createStore } from 'vuex'
import createPersistedState  from "vuex-persistedstate"
import {api} from "@/utils/baseProxy"



export default createStore({
  state: {
    isShowLoginWindow: false,
    userId: '',
    themeColor: '',
    isLogin: false,
    playSongList: [],
    currentPlayIndex: 0,
    audioEle: null,
    audioInfo: {
      name: '歌曲名称',
      author: '未知',
      pic: '',
      currentTime: 0,
      duration: 0,
      volume: 1,
    },
    isPlayState: false,
    danceLyric: false,
  },
  mutations: {
    setIsShowLoginWindow(state,b){
      state.isShowLoginWindow = b
    },
    setUserId(state,userId){
      state.userId = userId
    },
    setThemeColor(state,color){
      state.themeColor = color
    },
    setIsLogin(state,b){
      state.isLogin = b
    },
    setPlaySongList(state,list){
      state.playSongList = list
    },
    setCurrentPlayIndex(state,index){
      state.currentPlayIndex = index
    },
    setAudioEle(state,ele){
      state.audioEle = ele
    },
    setDuration(state,time){
      state.audioInfo.duration = time
    },
    setCurrentTime(state,time){
      state.audioInfo.currentTime = time
    },
    setVolume(state,volume){
      state.volume = volume
      state.audioEle.volume = volume
    },
    playMusic(state){
      // console.log(state.audioInfo.volume)
      state.audioEle.volume = state.audioInfo.volume
      // state.audioEle.playbackRate = 3
      state.audioEle.play()

    },
    setIsPlayState(state){
      state.isPlayState = !state.isPlayState
      if ( state.isPlayState ){
        state.audioEle.play()
      }else {
        state.audioEle.pause()

      }
    },
    danceLyric(state){
      state.danceLyric = !state.danceLyric
    },
  },
  actions: {
    async getMusicUrl({commit,state},payload){
      const {
        id,
        name,
        author,
        pic
      } = payload

      const res = await $axios.get(api + '/song/url?id='+id)
      // console.log(res)
      const data = res.data.data
      // 有些歌曲有版权，无法播放 返回空数据
      if ( data.length && data[0]['url'] ){
        // 要设置将要播放的音乐地址
        state.audioEle.src = data[0]['url']
        state.audioInfo.name = name
        state.audioInfo.author = author
        state.audioInfo.pic = pic
        state.audioInfo.src = data[0]['url']

        return true
      }else {
        return false
      }

    }
  },
  modules: {},
  plugins: [
      createPersistedState({
        // 指定 哪些state 需要缓存
        reducer(state){
          return {
            themeColor: state.themeColor,
            isShowLoginWindow: state.isShowLoginWindow,
            isLogin: state.isLogin,
            playSongList: state.playSongList,
            currentPlayIndex: state.currentPlayIndex,
            audioInfo: state.audioInfo,
            audioEle: state.audioEle,
          }
        }

      }),
  ],
})
