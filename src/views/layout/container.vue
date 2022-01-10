<template>
  <div v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="禁止刷新页面,否则数据将丢失..." element-loading-spinner="el-icon-loading">
    <Editor class="editor" :isToolBar="[' undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect  | alignleft aligncenter alignright | outdent indent | tablemergecells tablesplitcells']" />
  </div>
</template>

<script>
import Editor from "../../components/Editor.vue"
export default {
  components: {Editor},
  data(){
      return {
          fullscreenLoading: true
      }
  },
  mounted(){
    if(this.$store.state.nowcontent){
          setTimeout(() => {
            tinyMCE.activeEditor.setContent(this.$store.state.nowcontent)
            this.fullscreenLoading = false
        },2000)
    } else {
      this.fullscreenLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>