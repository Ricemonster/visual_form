<template>
    <div class="headerContainer">
        <div class="header__left">
            <el-tag type="success" size="mini">Beta版</el-tag>
            <el-input v-model="name" type="text" placeholder="请输入表单名称"></el-input>
        </div>
        <div class="header__right">
            <div class="header__right--item"  @click="toPreview">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-preview"></use>
                </svg>
                <span>预览</span>
            </div>
            <div class="header__right--item"  @click="upload">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-upload"></use>
                </svg>
                <span>表单导入</span>
            </div>
            <div class="header__right--item"  @click="download">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-download"></use>
                </svg>
                <span>表单导出</span>
            </div>
            <el-button round class="submit" @click="download">保存</el-button>
        </div>
        <input type="file" @change="loadTextFromFile" formenctype="text/plain" id="fileId" hidden />
    </div>
</template>

<script>
import { saveAs } from 'file-saver'
export default {
    data(){
        return {
            name: '未命名',
            formData:new FormData()
        }
    },
    methods:{
        // 导出文件
        download() {
            this.$prompt('','请输入导出文件名',{
                confirmButtonText: '确定导出',
                cancelButtonText: '取消操作',
                roundButton: true,
                // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                // inputErrorMessage: '不能为空'
            }).then(({ value }) => {
                // 获取的当前编辑器内容
                let content = tinymce.activeEditor.getContent()
                content = new Blob([content], { type: 'text/plain;charset=utf-8' });
                if(!value){
                    saveAs(content, `visualform.txt`)
                } else {
                    saveAs(content, `${value}.txt`)
                }
            })
        },
        // 导入文件
        upload() {
            document.getElementById("fileId").click();
        },
        // 导入文件 - 设置内容到编辑器
        loadTextFromFile(e) {
            const file = e.target.files[0];
            let name = file.name.split(".").splice(-1).toString();
            if (name !== "txt") {
                this.$message({
                    showClose: true,
                    message: '文件类型错误,请重新选择文件',
                    type: 'warning'
                });
                return false;
            }
            const reader = new FileReader();
            if (typeof FileReader === "undefined") {
                this.$message({
                    showClose: true,
                    message: '您的浏览器不支持FileReader接口',
                    type: 'warning'
                });
            }
            reader.onload = (e) => this.$emit("load", this.dealNum(e.target.result));
            reader.readAsText(file, "utf-8"); 
            },
            dealNum(item) {
            tinyMCE.activeEditor.setContent(item)
        },
        // 预览
        toPreview(){
            let content = tinymce.activeEditor.getContent()
            this.$store.commit('addContent',content);
            this.$router.push({
                name:'preview', 
                params: { content: content }
            })
        },
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

.header__right {
    display: flex;
    flex-direction: row;
    align-items: center;
    .header__right--item {
        padding-top: 10px;
        padding-bottom: 10px;
        width: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        cursor: default;
        span {
            font-size: 14px;
            margin-top: 6px;
        }
        &:hover {
            background-color: #f1f3f4;
        }
    }
}

.el-input__inner {
    border: 1px solid transparent !important;
    font-size: 16px !important;
    letter-spacing: 1px;
}

.submit {
    background:#2854ff;color:#fff;
    margin-left: 15px;
}
</style>