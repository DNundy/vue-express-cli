import Vue from 'vue'
import Router from 'vue-router'
import store from './../store/store'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { name: '/', path: '/', component: ''}
  ]
})

export default router