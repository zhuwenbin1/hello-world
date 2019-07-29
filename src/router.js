import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/login/Login.vue'
import Home from './components/home/Home.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // 重定向
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

export default router
