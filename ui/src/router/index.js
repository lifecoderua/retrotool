import Vue from 'vue'
import Router from 'vue-router'
import VModal from 'vue-js-modal'
import Index from '@/components/index'
import Join from '@/components/join'
import Room from '@/components/room'

Vue.use(Router)
Vue.use(VModal)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/room/:id',
      name: 'room',
      component: Room
    }
  ]
})
