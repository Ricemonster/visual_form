<template>
  <div>
    <Editor class="editor" />
  </div>
</template>

<script>
import Editor from "../../components/Editor.vue"
export default {
  components: {Editor}
}
</script>

<style lang="scss" scoped>
.editor {
  height: 1000px;
}
</style>