import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TheQuiz from '@/components/TheQuiz'
import AddStatement from '@/components/AddStatement'
import Edit from '@/components/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'TheQuiz',
      component: TheQuiz
    },
    {
      path: '/addStatement',
      name: 'AddStatement',
      component: AddStatement
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    }
  ]
})
