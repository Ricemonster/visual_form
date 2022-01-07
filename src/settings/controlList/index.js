import layoutComponent from './layout/layoutComponent';
import baseComponent from './base/baseComponent';

export default [
    {
        label: '布局控件',
        prohibited: true, // 禁止拖动
        list: layoutComponent
    },
    {
        label: '基础控件',
        list: baseComponent
    }
]