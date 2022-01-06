<template>
    <div class="page">
        <div class="header">
            <Header />
        </div>
        <div class="content">
            <div class="content__menu">
                <Menu />
                <Controller :componentsList="ControllerSetting" />
            </div>
            <div class="content__container">
                <Container />
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

import ControllerSetting from '../settings/controlList' // 控制器组件详情

export default {
    data(){
        return {
            ControllerSetting: ControllerSetting
        }
    },
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
    @include b(content){
        width: 100%;
        overflow: hidden;
        height: 92vh;
        display: flex;
        @include e(menu){
            width: 18%;
            display:flex;
            flex-direction: row;
            height:100vh;
            overflow: hidden;
            background: #ffffff;
        }
        @include e(container){}
    }
}
</style>