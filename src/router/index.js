import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)


const routes = [{
    path: '/',
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    meta: { //对象
      headerflag: false, //可以设置参数 true显示
    },
    component: home,
  },
  {
    path: "/login",
    meta: { //对象
      headerflag: true, //可以设置参数 true显示
    },
    component: () => import('../components/login.vue')
  },
  {
    path: "/seach",
    meta: { //对象
      headerflag: true, //可以设置参数 true显示
    },
    component: () => import('../components/seach.vue')
  },
  {
    path: "/menu",
    name: "menu",
    meta: { //对象
      headerflag: false, //可以设置参数 true显示
    },

    component: () => import('../views/menu.vue')
  },
  {
    path: "/menulist",
    meta: { //对象
      headerflag: true, //可以设置参数 true显示
      index: 2
    },
    component: () => import('../components/menu/menulist.vue')
  },
  {
    path: "/menudetails",
    meta: { //对象
      headerflag: true, //可以设置参数 true显示
      index: 1
    },
    component: () => import('../components/menu/menudetails.vue')
  },
  {
    path: "/cart",
    name: "cart",
    headerflag: true, //可以设置参数 true显示

    component: () => import('../views/cart.vue'),
  },
  {
    path: "/pay",
    name: "pay",
    meta: { //对象
      headerflag: true, //可以设置参数 true显示
    },
    component: () => import('../components/pay.vue')
  },
  {
    path: "/personage",
    name: "personage",
    meta: { //对象
      headerflag: true, //可以设置参数 true显示
    },
    component: () => import('../components/personage.vue')
  },
  {
    path: "/address",
    name: "address",
    meta: { //对象
      headerflag: true, //可以设置参数 true显示
    },
    component: () => import('../components/address.vue')
  },
  {
    path: "/mine",
    name: "mine",
    meta: { //对象
      headerflag: false, //可以设置参数 true显示
    },

    component: () => import('../views/mine.vue')
  }
]

const router = new VueRouter({
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 解决路由重复跳转报错 路由导航冗余报错（路由重复）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router