import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import { toCurrency } from './filters'

const axios = Axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: { authorization: '' }
});

Vue.use(VueAxios, axios)

Vue.filter('toCurrency', toCurrency)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
