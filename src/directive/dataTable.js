/**
 * Created by Administrator on 2018/1/25.
 * 模块说明:
 */
export default {
  name : 'dataTable',

  props:{
    bind:function(el,binding,vnode){
      el.innerHTML =
        '<p >'+
        '该指令的参数'+binding.arg + '<br>'+
        '外部传值的参数'+binding.expression + '<br>'+
        '外部传入的值'+binding.value + '<br>'+
          '</p>'
    },
    inserted:function(){

    },
    update:function(){

    },
    componentUpdated:function(){

    },
    unbind:function(){

    }
  },

}
