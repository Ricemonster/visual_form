<template>
    <div v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="禁止刷新页面,否则数据将丢失..." element-loading-spinner="el-icon-loading">
        <Editor class="editor" :isToolBar="false" />
    </div>
</template>

<script>
import Editor from "../components/Editor.vue"
export default {
    components: {Editor},
    data(){
        return {
            fullscreenLoading: true
        }
    },
    mounted(){
        let content = this.$route.params.content
        setTimeout(() => {
            tinyMCE.activeEditor.setContent(content)
            this.fullscreenLoading = false
        },2000)
    }
}
</script>

<style>

</style>