<template>
<div class="container">
  <div>{{row}}行 * {{col}} 列</div>
    <div class="box" @mouseout="removeActive()" @click="designForm">
      <div class="row row-1">
        <div @mouseover.stop.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-2">
        <div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-3">
        <div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-4">
        <div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-5">
<div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-6">
<div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-7">
<div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-8">
<div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-9">
          <div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-10">
        <div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-11">
        <div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
      <div class="row row-12">
        <div @mouseover.stop="addActive($event)"  v-for="(item,index) in 12" :key="index" :class="['item',true?'item-'+(index+1) : '']">
          <div class="itembox"></div>
        </div>
      </div>
  </div>

  <div style="margin-bottom:100px"></div>
<!-- _ 为占位符,无实际意义 -->
  <div class="content" v-if="isForm">
    <el-row v-for="_ in Number(drawRow)" :key="'row1-' + _">
      <el-col v-for="_ in Number(drawCol)" :key="'col1-' + _" :span="parseInt(24/drawCol)"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      row: 0,
      col: 0,
      drawRow: 0,
      drawCol: 0,
      isForm: false,
      distribution: 0
    }
  },
  watch: {
    row(){
      this.drawingItem()
    },
    col(){
      this.drawingItem()
    }
  },
  methods: {
    addActive($event){
      this.row = $event.currentTarget.parentElement.className.split(' ')[1].split('-')[1]
      this.col = $event.currentTarget.className.split(' ')[1].split('-')[1]
    },
    removeActive(){
      this.row = 0;
      this.col = 0;
      for(let i=1;i<=12;i++){
        let rowdom = document.getElementsByClassName('row-'+i)
        for(let j=0;j<12;j++){
          rowdom[0].childNodes[j].getElementsByClassName('itembox')[0].classList.remove('active')
        }
      }
    },
    drawingItem(){
      let col = this.col
      let row = this.row
      for(let i=1;i<=row;i++){
        let rowdom = document.getElementsByClassName('row-'+i)
        for(let j=0;j<col;j++){
          rowdom[0].childNodes[j].getElementsByClassName('itembox')[0].classList.add('active')
        }
      }
    },
    designForm(){
      this.isForm = true;
      // 已知列数和行数 如何渲染出表格
      this.drawCol = this.col;
      this.drawRow = this.row;
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-left: 30px;
}
.box {
  width: 190px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
   align-items: center;
   margin-top: 10px;
   margin-left: 20px;
  
  .row {
    display: flex;
    align-items: center;
    .item {
      box-sizing: border-box;
      height: 20px;
      width: 20px;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .itembox {
        border: 1px solid black;
        height: 15px;
        width: 15px;
      }
    }
  }
}

.active {
  background-color: #e5624a;
}



// 生成的表单
.content {
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 1px;
}
.el-row .el-col:first-child {border-right: 0px;}
.el-row .el-col:last-child {border-left: 0px;}
.el-row {
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border: 1px solid black;
  margin-right: -1px;
  margin-bottom: -1px;
}
.bg-purple-dark {
}
.bg-purple {
}
.bg-purple-light {
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>