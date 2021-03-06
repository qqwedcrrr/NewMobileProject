import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chart from '@/components/chart'
import todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    }
  ]
})
