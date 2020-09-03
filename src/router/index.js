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
            path: '/news/new',
            name: 'newsnew',
            component: () => import("../view/news/new/index")
        },
        {
            path: '/news/newinfo',
            name: 'newinfo',
            component: () => import("../view/news/new/info")
        },
        {
            path: '/news/report',
            name: 'newsreport',
            component: () => import("../view/news/report/index")
        },
        {
            path: '/news/reportinfo',
            name: 'newsreportinfo',
            component: () => import("../view/news/report/info")
        },
        {
            path: '/learn/dynamic',
            name: 'learndynamic',
            component: () => import("../view/learn/dynamic/index")
        },
        {
            path: '/learn/dynamicinfo',
            name: 'dynamicinfo',
            component: () => import("../view/learn/dynamic/info")
        },
        {
            path: '/learn/meeting',
            name: 'learnmeeting',
            component: () => import("../view/learn/meeting/index")
        },
        {
            path: '/learn/meetinginfo',
            name: 'meetinginfo',
            component: () => import("../view/learn/meeting/info")
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
            path: '/achieve/viewpoint',
            name: 'achieveviewpoint',
            component: () => import("../view/achieve/viewpoint/index")
        },
        {
            path: '/achieve/viewpointinfo',
            name: 'viewpointinfo',
            component: () => import("../view/achieve/viewpoint/info")
        },
        {
            path: '/achieve/report',
            name: 'achievereport',
            component: () => import("../view/achieve/report/index")
        },
        {
            path: '/achieve/reportinfo',
            name: 'achievereportinfo',
            component: () => import("../view/achieve/report/info")
        },
        {
            path: '/scholar/scholar',
            name: 'scholarscholar',
            component: () => import("../view/scholar/scholar/index")
        },
        {
            path: '/scholar/college',
            name: 'scholarcollege',
            component: () => import("../view/scholar/college/index")
        },
        {
            path: '/scholar/organization',
            name: 'scholarorganization',
            component: () => import("../view/scholar/organization/index")
        }
    ]
})


export default router

