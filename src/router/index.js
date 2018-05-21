import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainLayout from '@/components/layouts/MainLayout'
import Login from '@/components/Login'
import TasksComponent from '@/components/TasksComponent'
import Landing from '@/components/Landing'
import Counter from '@/components/Counter'
import TasksTimeline from '@/components/TasksTimeline'
// import Tasks from '@/components/TasksComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout
    },
    {
      path: 'hello',
      alias: '',
      component: HelloWorld,
      name: 'Hello',
      meta: {
        description: 'Vue hello World',
        requiresAuth: true
      }
    },
    {
      path: '/cards',
      name: 'Tasks',
      component: TasksComponent
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/tasks/timeline',
      name: '/tasks/timeline',
      component: TasksTimeline
    }
  ]
})
