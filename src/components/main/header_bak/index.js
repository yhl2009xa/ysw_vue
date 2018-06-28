/**
 * Created by Administrator on 2017/12/22.
 * 模块说明:
 */

import  AjaxApi from '@/utils/ajaxApi';
import  AjaxHelper from '@/utils/ajaxHelper';
import  Common from '$utils/common';

export  default {
  data:function(){
    return {
      userName :''
    }
  },
  create:function(){
    var userInfo = Common.getCookie('hysUserInfo');
    if(!userInfo){
      this.userName = '';
    } else {
      this.userName = $.parseJSON(userInfo).userName;
      this.token = $.parseJSON(userInfo).token;
    }
  }
}
