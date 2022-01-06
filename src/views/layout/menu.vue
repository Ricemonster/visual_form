<template>
  <div class="container">
    <ul> 
      <li @click="changeMenu('control')" :class="$store.state.currentMenu == 'control' ? 'active':''">
        <i class="iconfont icon-tiaoshi"></i>
        <div class="">控件</div>
      </li>
      <li @click="changeMenu('template')" :class="$store.state.currentMenu == 'template' ? 'active':''">
        <i class="iconfont icon-chucun"></i>
        <div class="">模板库</div>
      </li>
      <li @click="changeMenu('history')" :class="$store.state.currentMenu == 'history' ? 'active':''">
        <i class="iconfont icon-history"></i>
        <div class="">历史</div>
      </li>
    </ul>
  </div>
</template>

<script>
// 菜单栏
export default {
  methods:{
    changeMenu(name){
      this.$store.commit('changeMenu',name);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 20%;
  height: 100%;
  border-right: 1px solid #eeeff1;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      color: #606266;
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        background-color: #f1f3f4;
      }
      i {
        font-size: 24px;
      }
      div {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
}



.active {
  color: #fff !important;
  background-color: #2854ff !important;
}
</style>