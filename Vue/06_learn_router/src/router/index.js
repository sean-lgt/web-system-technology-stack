import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由的懒加载
// const Home = () => import(/* webpackChunkName: 'home' */"../views/Home.vue")
// const About = () => import(/* webpackChunkName: 'about' */"../views/About.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('../views/Home.vue'),
      meta: {
        name: 'why',
        age: 18,
      },
      children: [
        {
          path: '/home',
          redirect: '/home/recommend',
        },
        {
          path: 'recommend', // /home/recommend
          component: () => import('../views/HomeRecommend.vue'),
        },
        {
          path: 'ranking', // /home/ranking
          component: () => import('../views/HomeRanking.vue'),
        },
      ],
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/user/:id',
      component: () => import('../views/User.vue'),
    },
    {
      path: '/order',
      component: () => import('../views/Order.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
    {
      // abc/cba/nba
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

// 获取router中所有的映射路由对象
console.log(router.getRoutes())

// 2.路由导航守卫
// 进行任何的路由跳转之前, 传入的beforeEach中的函数都会被回调
// 需求: 进入到订单(order)页面时, 判断用户是否登录(isLogin -> localStorage保存token)
// 情况一: 用户没有登录, 那么跳转到登录页面, 进行登录的操作
// 情况二: 用户已经登录, 那么直接进入到订单页面
router.beforeEach((to, from) => {
  // 1.进入到任何别的页面时, 都跳转到login页面
  // if (to.path !== "/login") {
  //   return "/login"
  // }
  // 2.进入到订单页面时, 判断用户是否登录
  const token = localStorage.getItem('token')
  if (to.path === '/order' && !token) {
    return '/login'
  }
})

export default router
