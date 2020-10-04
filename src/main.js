import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false// 路由拦截，拦截全部路由，每次操作路由都是被拦截进行判断
// 路由前置守卫
router.beforeEach((to,from,next)=>{
  // 从本地存储中拿token
  const token = localStorage.getItem("token")

  // 筛选需要传token的路由，匹配route里面需要登陆的路径，如果匹配到的就是true
  if( to.matched.some(record => record.meta.requiresAuth)){
    // 如果登陆了，执行下一步，没有登陆，跳转到登陆路由
    // 根据token是否有，判断是否需要调到登录页面
    if(token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next()
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
