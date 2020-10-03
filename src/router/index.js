// 引用 vue,vue-router 模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件模块
import Home from '../views/Home/Home.vue'
import CourseDetail from '../views/CourseDetail/CourseDetail.vue'
import Login from '../views/Login/Login.vue'
import Order from '../views/Order/Order.vue'
import Pay from '../views/Pay/Pay.vue'
import Personal from '../views/Personal/Personal.vue'
import Register from '../views/Register/Register.vue'

// 使用 VueRouter 
Vue.use(VueRouter)

// 单独提出 routes
// 定义路由关系
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/coursedetail",
        name: "CourseDetail",
        //按需加载
        component: () => import("../views/CourseDetail/CourseDetail.vue")
        //component:CourseDetail
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/order",
        name: "Order",
        component: Order,
        meta: { requiresAuth: true }
    }, {
        path: "/pay",
        name: "Pay",
        component: Pay,
        meta: { requiresAuth: true }
    }, {
        path: "/personal",
        name: "Personal",
        component: Personal,
        meta: { requiresAuth: true }

    }, {
        path: "/register",
        name: "Register",
        component: Register
    }
]

// 创建路由实例
const router = new VueRouter({
    // 定义路由关系
    routes
})

// 导出 router
export default router