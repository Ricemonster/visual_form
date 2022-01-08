<template>
    <div class="headerContainer">
        <div class="header__left">
            <el-tag type="success" size="mini">Beta版</el-tag>
            <el-input v-model="name" type="text" placeholder="请输入表单名称"></el-input>
        </div>
        <div class="header__right">
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
        <input type="file" @change="upload(this)" />  
    </div>
</template>

<script>
import { saveAs } from 'file-saver'
export default {
    data(){
        return {
            name: '未命名'
        }
    },
    methods:{
        download() {
            this.$prompt('','请输入导出文件名',{
                confirmButtonText: '确定导出',
                cancelButtonText: '取消操作',
                roundButton: true,
                // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                // inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
                // 获取的当前编辑器内容
                let content = tinymce.activeEditor.getContent()
                content = new Blob([content], { type: 'text/plain;charset=utf-8' });
                saveAs(content, `${value}.txt`)
                this.$message('导出成功!');
            })
        },
        uplosad() {
            // tinymce.activeEditor.setContent(
                let fr = new FileReader()
                fr.readAsText()
        },
        upload(input) {  
            console.log(input)
            //支持chrome IE10  
            if (window.FileReader) {  
                var file = input.files[0];  
                filename = file.name.split(".")[0];  
                var reader = new FileReader();  
                reader.onload = function() {  
                    console.log(this.result);  
                }  
                reader.readAsText(file);  
            }   
            //支持IE 7 8 9 10  
            else if (typeof window.ActiveXObject != 'undefined'){  
                var xmlDoc;   
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");   
                xmlDoc.async = false;   
                xmlDoc.load(input.value);   
                console.log(xmlDoc.xml);   
            }   
            //支持FF  
            else if (document.implementation && document.implementation.createDocument) {   
                var xmlDoc;   
                xmlDoc = document.implementation.createDocument("", "", null);   
                xmlDoc.async = false;   
                xmlDoc.load(input.value);   
                console.log(xmlDoc.xml);  
            } else {   
                alert('error');   
            }   
        } 
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
        width: 100px;
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