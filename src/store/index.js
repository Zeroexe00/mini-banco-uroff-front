import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUserState: (state, payload) => {
      state.user = {...payload}
    }
  },
  actions: {
    setUserInfo: ({ commit }, userInfo) => {
      return new Promise(resolve => {
        commit('setUserState',userInfo);
        resolve();
      })
    }
  }
})
