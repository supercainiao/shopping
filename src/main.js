import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

import route from './router/index.js'
Vue.use(Router);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'src/static/loading-svg/loading-bubbles.svg',
  attempt: 1
})
const router = new Router(route);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
