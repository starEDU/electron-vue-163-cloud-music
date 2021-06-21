import { createStore } from 'vuex'

export default createStore({
  state: {
    isShowLoginWindow: false
  },
  mutations: {
    setIsShowLoginWindow(state,bool){
      state.isShowLoginWindow = bool
    }
  },
  actions: {
  },
  modules: {
  }
})
