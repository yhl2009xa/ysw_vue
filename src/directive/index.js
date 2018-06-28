/**
 * Created by Administrator on 2018/1/25.
 * 模块说明:
 */
import dataTable from './dataTable'

var directives = [dataTable];

export  default {
  initial : function (Vue) {
    for (var val of directives){
      Vue.directive(val.name,val.props)
    }
  }
}
