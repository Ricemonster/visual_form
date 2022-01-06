<template>
    <div class="headerContainer">
        <div class="header__left">
            <el-tag type="success" size="mini">Beta版</el-tag>
            <el-input v-model="name" type="text" placeholder="请输入表单名称"></el-input>
        </div>
        <div class="header__right">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: '未命名'
        }
    }
}
</script>

<style lang="scss">
.headerContainer {
    width:98%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.header__left {
    display: flex;
    flex-direction: row;
    align-items: center;
}


.el-input__inner {
    border: 1px solid transparent !important;
    font-size: 16px !important;
    letter-spacing: 1px;
}
</style>