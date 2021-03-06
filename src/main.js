import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router/index'
import store from './store/index'
import './styles/Base/base.scss'
import './assets/font/icons.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'

Vue.prototype.$tinymce = tinymce // 将全局tinymce对象指向给Vue作用域下
Vue.use(VueTinymce) // 安装vue的tinymce组件
Vue.use(ElementUI)
Vue.config.productionTip = false

import vuedraggable from 'vuedraggable'
Vue.component('draggable',vuedraggable)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')