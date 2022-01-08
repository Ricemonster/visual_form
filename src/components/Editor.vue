<template>
    <div>
        <vue-tinymce
            ref="editor"
            class="editor overflow-scroll"
            id="uTinymce"
            v-model="content" 
            :setting="setting" 
        />
    </div>
</template>

<script>
// https://www.tiny.cloud/?title=Configuration%3Atheme_advanced_toolbar_location&showmsg=edit 排版和样式借鉴
export default {
    data(){
        return {
            content: '',
            setting: {
                menubar: false,  // 显示菜单栏
                toolbar_mode: 'sliding', // 当屏幕过小，工具栏会自动隐藏一部分
                // 工具栏插件及排版
                toolbar: [' undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect  | alignleft aligncenter alignright alignjustify | outdent indent table'],
                plugins: " image link insertdatetime table",  // 需要使用的插件列表
                language: 'zh_CN', // 语言环境为简体中文
                height: 800,
                branding: false, // 隐藏底部技术支持字样
                elementpath: false, // 隐藏底部栏元素显示
                contextmenu_never_use_native: true, //屏蔽浏览器默认鼠标右键点击事件
                statusbar: false, // 底部状态栏
            }
        }
    },
}
</script>

<style lang="scss" scoped>
</style>