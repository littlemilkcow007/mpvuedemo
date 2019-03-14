import Vue from 'vue'
import App from './App'
import store from './store'
// import '//at.alicdn.com/t/font_1038452_v1wzluzzs5q.css'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store // 全局注册store

const app = new Vue(App)
app.$mount()
