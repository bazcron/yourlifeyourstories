import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TheQuiz from '@/components/TheQuiz'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/donations',
      name: 'TheQuiz',
      component: TheQuiz
    }
  ]
})
