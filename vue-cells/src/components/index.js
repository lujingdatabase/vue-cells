/*
 * @Author: lujing 
 * @Date: 2018-09-17 17:57:47 
 * @Last Modified by: lujing
 * @Last Modified time: 2018-09-17 17:58:14
 * @Desc:所有的组件都以j开头，区分其他的组件  
 */

import jTest from './jTest.vue'




// 所有的组件
const vueCellSViews = {
        jTest
    }
    // 遍历挂载组件
function install(Vue, _) {
    Object.keys(vueCellSViews).forEach(key => {
        Vue.component(key, vueCellSViews[key]);
    });
}

// 
const API = {
    // version: process.env.VERSION,
    install
    // ...vueCellSViews
}


// 导出模块
export default API
// module.exports.default = module.exports = API;