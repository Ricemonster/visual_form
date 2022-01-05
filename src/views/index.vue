<template>
    <div class="page">
        <div class="header">
            <Header />
        </div>
        <div class="content">
            <div class="menu">
                <Menu />
            </div>
            <div class="controller">
                <Controller />
            </div>
            <div class="container">
                <Container />
            </div>
            <div class="controllerDetail">
                <ControllerDetail />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './layout/header.vue' // 顶部栏
import Menu from './layout/menu.vue' // 左侧菜单栏
import Controller from './layout/controller.vue' // 控制器栏
import Container from './layout/container.vue' // 页面容器
import ControllerDetail from './layout/controllerDetail.vue' // 右侧控件设置详情
export default {
    components: { Header,Menu,Container,Controller,ControllerDetail }
}
</script>

<style lang="scss" scoped>
.page {
    @include b(header){
        width: 100%;
        height: 64px;
        border-bottom: 1px solid #eeeff1;
        background: #fff;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
}
</style>