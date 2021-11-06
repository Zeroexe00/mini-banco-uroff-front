import Vue from 'vue'
import Vuex from 'vuex'
import jwt_decode from 'jwt-decode';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuth: false
  },
  mutations: {
    setUserState: (state, payload) => {
      state.user = {...payload}
    },
    setIsAuthenticated: (state, payload) => {
      state.isAuth = payload
    }
  },
  actions: {
    getUserInfo: ({commit}) => {
      return new Promise(resolve => {
        let userInfo;
        if(typeof window === 'object') {
          userInfo = jwt_decode(localStorage.getItem('token'))
        }
        commit('setUserState',userInfo)
        resolve()
      })
    },
    setUserInfo: ({ commit }, userInfo) => {
      return new Promise(resolve => {
        commit('setUserState',userInfo);
        commit('setIsAuthenticated',true);
        resolve();
      })
    }
  }
})
