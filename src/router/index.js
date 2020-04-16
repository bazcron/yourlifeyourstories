import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Members from '@/components/Members'
import SearchStories from '@/components/SearchStories'
import Help from '@/components/Help'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/searchStories',
      name: 'SearchStories',
      component: SearchStories
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    }
  ]
})
