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
            path: '/newsreportinfo',
            name: 'newsreportinfo',
            component: () => import("../view/news/report-info")
        },
        {
            path: '/learn',
            name: 'learn',
            component: () => import("../view/learn/index")
        },
        {
            path: '/learninfo',
            name: 'learninfo',
            component: () => import("../view/learn/info")
        },
        {
            path: '/technology',
            name: 'technology',
            component: () => import("../view/technology/index")
        },
        {
            path: '/technologyinfo',
            name: 'technologyinfo',
            component: () => import("../view/technology/info")
        },
        {
            path: '/policy',
            name: 'policy',
            component: () => import("../view/policy/index")
        },
        {
            path: '/policyinfo',
            name: 'policyinfo',
            component: () => import("../view/policy/info")
        },
        {
            path: '/achieve',
            name: 'achieve',
            component: () => import("../view/achieve/index")
        },
        {
            path: '/achieveinfo',
            name: 'achieveinfo',
            component: () => import("../view/achieve/info")
        },
        {
            path: '/report',
            name: 'report',
            component: () => import("../view/report/index")
        },
        {
            path: '/reportinfo',
            name: 'reportinfo',
            component: () => import("../view/report/info")
        },
        {
            path: '/scholar',
            name: 'scholar',
            component: () => import("../view/scholar/index")
        }
    ]
})


export default router

