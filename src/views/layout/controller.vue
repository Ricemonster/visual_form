<template>
  <div class="container">
    <div class="container__item" v-for="(item) in componentsList" :key="item.label">
      <div class="container__item--title">{{item.label}}</div>
      <draggable
        v-model="item.list"
        :group="{ name: 'TpFormGroup', pull: 'clone', put: false }"
        :sort="false"
        :disabled="item.prohibited?true:false"
        animation="300"
        class="container__item--box"
      >
        <!-- 这里只会显示一个所有需要一个容器分层次的分开 -->
          <div :class="['container__item--box__item',item.prohibited?'click':'']" v-for="(control) in item.list" :key="control.name" @click="clickMethod(control)">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="control.icon"></use>
            </svg>
            <div>{{control.name}}</div>
          </div>
      </draggable>
    </div>
    <ViewForm class="form" v-if="formShow" />
  </div>
</template>

<script>
// 菜单栏详情
import ViewForm from '../../components/viewForm.vue'
export default {
  props: {
    componentsList: {
      type: Array,
      default: _ => []
    }
  },
  data() {
    return {
      formShow: false, // 设计表单的显示
    }
  },
  components: { ViewForm },
  mounted(){
  },
  methods:{
    clickMethod(item){
      if(item.title == 'table'){
        this.formShow = !this.formShow ;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
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
      flex-wrap: wrap;
      .container__item--box__item {
        display: flex;
        flex-direction:row;
        align-items: center;
        margin-top: 10px;
        margin-right: 10px;
        font-size: 10px;
        width: 95px;
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

.form {
  position: absolute;
  top: 80px;
  left: 0px;
}
.click {
  cursor: pointer !important;
}
</style>