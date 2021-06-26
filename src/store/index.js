import { createStore } from 'vuex'
import createPersistedState  from "vuex-persistedstate"


export default createStore({
  state: {
    isShowLoginWindow: false,
    userId: '',
    themeColor: '',
    isLogin: false,
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
    }
  },
  actions: {},
  modules: {},
  plugins: [
      createPersistedState({
        // 指定 哪些state 需要缓存
        reducer(state){
          return {
            themeColor: state.themeColor,
            isShowLoginWindow: state.isShowLoginWindow,
            isLogin: state.isLogin
          }
        }

      }),
  ],
})
