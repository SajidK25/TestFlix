// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
window.$=window.jquery=require('jquery')
import 'bulma/css/bulma.css'
import 'bulma-start/css/main.css'
import 'bulma-start/_javascript/main.js'
import 'bulma-start/lib/main.js'

Vue.config.productionTip = false
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './router/index'
const router=new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
