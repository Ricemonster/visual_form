// lodash 是用来接受合并配置项的
import lodash from 'lodash'

function baseObject(options){
    return lodash.merge({
        fielId: '', // 控件id
        name: '', // 控件名称
        title: '', // 控件 title
        icon: '', // 控件图标
        settings: {
        },
        value: '',
        placeholder: ''
    },options)
}
export default baseObject;