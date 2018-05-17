import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('pages/home/index')
    }, {
      path: '/city',
      name: 'city',
      component: () => import('pages/city/index')
    }, {
      path: '/detail/:sightid',
      name: 'detail',
      component: () => import('pages/detail/index'),
      props: true
    }
  ]
})
