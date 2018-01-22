import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/product'
import User from '@/components/user'
import Banner from '@/components/banner'
import AddBanner from '@/components/addbanner'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/banner/:id',
      name: 'banner',
      props: true,
      component: Banner
    },
    {
      path: '/addbanner/:addid',
      name: 'addbanner',
      props: true,
      component: AddBanner
    }
  ]
})
