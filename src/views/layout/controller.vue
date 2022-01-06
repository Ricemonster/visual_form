<template>
  <div class="container">
    <div class="container__item" v-for="(item) in componentsList" :key="item.label">
      <div class="container__item--title">{{item.label}}</div>
      <draggable
        v-model="arr"
        :group="{ name: 'TpFormGroup', pull: 'clone', put: false }"
        :sort="false"
        animation="300"
      >
        <!-- 这里只会显示一个所有需要一个容器分层次的分开 -->
        <div class="container__item--box">
          <div class="container__item--box__item" v-for="(control) in item.list" :key="control.name">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="control.icon"></use>
            </svg>
            <div>{{control.name}}</div>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
// 菜单栏详情
export default {
  props: {
    componentsList: {
      type: Array,
      default: _ => []
    }
  },
  data() {
    return {
      arr: ['文科','理科','新高考'],
      radio: ''
    }
  },
  mounted(){
    console.log(this.componentsList)
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 70%;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #eeeff1;
  padding: 15px;
  @include b(container__item){
    margin-bottom: 20px;
    .container__item--title{
      font-size: 18px;
      margin-bottom: 5px;
    }
    .container__item--box {
      display: flex;
      flex-direction: row;
      align-items: center;
      .container__item--box__item {
        display: flex;
        flex-direction:row;
        align-items: center;
        margin-top: 10px;
        margin-right: 15px;
        font-size: 10px;
        width: 100px;
        cursor: move;
        background-color: #eef1f8;
        svg {
          height: 20px;
          padding: 4px;
          padding-right: 0px;
          width: 20px;
          margin-right: 5px;
        }
      }

    }
  }
}
.draggable {
  height: 100%;
  width: 100%;
}
</style>