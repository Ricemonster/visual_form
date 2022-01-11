<template>
    <div style="z-index: 50">
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
    mounted(){
    },
    props: {
        isToolBar: {
            type: Array | Boolean,
            required: true
        }
    },
    data(){
        return {
            content: '',
            setting: {
                icons_url: '/tinymce/icons/custom/icons.js', // 自定义图标
                icons: 'christmas', // 自定义图标库名
                // insertControl 为自定义控件到上下文菜单中
                contextmenu: "insertControl inserttable cell row column deletetable",
                contextmenu_never_use_native: true, //屏蔽浏览器默认鼠标右键点击事件
                menubar: false,  // 是否显示菜单栏
                toolbar_mode: 'sliding', // 当屏幕过小，工具栏会自动隐藏一部分
                // 工具栏插件及排版
                toolbar: this.isToolBar,
                plugins: " image link insertdatetime table insertControl",  // 需要使用的插件列表
                language: 'zh_CN', // 语言环境为简体中文
                height: 1000,
                branding: false, // 隐藏底部技术支持字样
                elementpath: false, // 隐藏底部栏元素显示
                statusbar: false, // 底部状态栏
            }
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
.tox-toolbar-overlord {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.tox-tinymce {
    border: 1px solid #f0f1f6 !important;
}
.tox-editor-header {
    border-bottom: 1px solid #f0f1f6 !important;
}
.tox-tbtn__select-label {
    color: #45548c !important;
    font-size: 14px !important;
    width: 4em !important; 
}
</style>