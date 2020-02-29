import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MembersPage from '@/components/MembersPage'
import SearchStories from '@/components/SearchStories'
import Help from '@/components/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/membersPage',
      name: 'MembersPage',
      component: MembersPage
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
