/**
 * Created by Administrator on 2018/1/26.
 * 模块说明:路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import routers from '@/components/router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:convertRouteMap(routers)
})

/**
 * 处理路由转换
 */
function convertRouteMap(rts){

  var routerArr = [];
  for(var rt of rts){
    var  rtObj = {};
    rtObj.path = rt.path;
    rtObj.name = rt.name?rt.name:'';
    rtObj.redirect = rt.redirect?rt.redirect:null;
    rtObj.component =  getPromisedComponent(rt.componentUrl);
    if(rt.hasOwnProperty("children")){
      var childrenRouters = rt.children;
      rtObj.children =  convertRouteMap(childrenRouters);
    }
    routerArr.push(rtObj);
  }
  return routerArr;
}


/**
 * resolve 一个空函数
 * @param url
 * @returns {Function}
 */
function getPromisedComponent(url){
  return function(resolve){
    require.ensure([],function(require){
      resolve(require('@/components/' + url + '.vue'));
    })

  }
}
