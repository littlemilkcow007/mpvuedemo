// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import action from './action'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  action
})

export default store
