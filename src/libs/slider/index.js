/**
 * 封装成插件的形式 可以通过npm install 方式安装
 * 调用时 导入文件 Vue.use(文件名) 就可以通过标签 全局调用了
 */
import Slider from './index.vue';
const VSlider = {
  install:function(Vue,options){
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(Slider.name,Slider)
  }
};

export default VSlider
