import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: () =>
        import ('@/views/index')
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    next()
})
router.afterEach((to, from) => {})


export default router