import { createStore } from 'vuex'
import createPersistedState  from "vuex-persistedstate"


export default createStore({
  state: {
    isShowLoginWindow: false
  },
  mutations: {
    setIsShowLoginWindow(state,b){
      state.isShowLoginWindow = b
    }
  },
  actions: {},
  modules: {},
  plugins: [
      createPersistedState(),
  ],
})
