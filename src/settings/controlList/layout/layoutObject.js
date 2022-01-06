// lodash 是用来接受合并配置项的
import lodash from 'lodash'

function layoutObject(options){
    return lodash.merge({
        fielId: '', // 控件id
        name: '', // 控件名称
        icon: '', // 控件图标
        setting: { // 行列布局
            row: '',
            col: ''
        }
    },options)
}
export default layoutObject;