import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.css'

Vue.config.productionTip = false
// 使用vue.use安装一下
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
