import Vue from 'vue'
import Router from 'vue-router'
import search from '@/page/search'
import myMusic from '@/page/myMusic'
import user from '@/page/user'
import discover from '@/page/discover'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'my-music',
    component: myMusic
  }, {
    path: '/search',
    name: 'search',
    component: search
  }, {
    path: '/discover',
    name: 'discover',
    component: discover
  }, {
    path: '/user',
    name: 'user',
    component: user
  }]
})
