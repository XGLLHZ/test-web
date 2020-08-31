import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import("../view/index")
        },
        {
            path: '/news',
            name: 'news',
            component: () => import("../view/news/index")
        },
        {
            path: '/newsinfo',
            name: 'newsinfo',
            component: () => import("../view/news/info")
        },
        {
            path: '/learn',
            name: 'learn',
            component: () => import("../view/learn/index")
        },
        {
            path: '/scholar',
            name: 'scholar',
            component: () => import("../view/scholar/index")
        }
    ]
})


export default router

