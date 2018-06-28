/**
 * Created by Administrator on 2017/12/22.
 * 模块说明:
 * 定义动画功能模板
 */
export default {
  data :function() {
    return {
      message:'过虑器测试'
    }
  },

  filters:{
    addStr:function(value){
      if(value != ""){
        return value + "。。。添加过滤器";
      }
    }
  }
}

