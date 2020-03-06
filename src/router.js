import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//导入组件
const Login = () => import('./views/login')
const Home = () => import('./views/home')
const Movie = () => import('./views/movie')

const router = new Router({
    routes: [
        {path: '/', redirect: '/Login'},
        {path: '/login', component: Login},
        {path: '/home', component: Home},
        {
            path: '/movie',
            component: Movie,
            name: 'movie'
        }

    ]
})


//路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示放行
//   //     next()  放行    next('/login')  强制跳转
//
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
