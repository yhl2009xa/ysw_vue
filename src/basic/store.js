/**
 * Created by Administrator on 2018/1/26.
 * 模块说明:
 * 存放全局的状态变量 其中的一个全局字段改变以后 多个组件需要更改状态
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const  store = new Vuex.Store({
  state:{
    count:"1111",
    showLoading:false
  },

  //存放事件类型 add 跟 payload参数
  mutations: {
    ADD_STR(state, num){
      state.count += num;
    },
    SHOW_LOADING(state,isShow){
      state.showLoading = isShow;
    }
  },
  //action 和mutions 的定义方法是类似的，在需要的地方dispatch action,
  actions:{
    addStr(context,num){
      context.commit("ADD_STR");
    },
    showLoading(context,isShow){
      context.commit("SHOW_LOADING",isShow);
    }
  },

  //存放
  getters:{
    fetchCount:function(state){
      return state.count
    },
    fetchLoading:function(state){
      return state.showLoading
    }
  },
})

export  default store

