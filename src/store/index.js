import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false, // 全局加载状态
    currentMenu: 'control' // 当前菜单位置 - 初始化在控件位置
  },
  mutations: {
    changeMenu (state,value) {
      state.currentMenu = value
    }
  }
})



export default store