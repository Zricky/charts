import Vue from 'vue'
import Router from 'vue-router'
import Personal from 'views/column/personal'
import Basic from 'views/column/basic'
import Line from 'views/line/index'
import China from 'views/map/china'
import Menu from 'views/menu/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/line',
      name: 'Line',
      component: Line
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/china',
      name: 'China',
      component: China
    }
  ]
})
