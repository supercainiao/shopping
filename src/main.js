import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import route from './router/index.js'
Vue.use(Router);
const router = new Router(route);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
