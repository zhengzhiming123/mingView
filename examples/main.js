import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/css/doc.scss'
import '../packages/index.scss'

import MingView from '../packages/index'
Vue.use(MingView)

import Highlight from './utils/highlight'; 
Vue.use(Highlight);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
