import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentMenu: 'control', // 当前菜单位置 - 初始化在控件位置
    nowcontent: null, // 当前编辑器里内容
  },
  mutations: {
    changeMenu (state,value) {
      state.currentMenu = value
    },
    addContent(state,value) {
      state.nowcontent = value
    }
  }
})



export default store