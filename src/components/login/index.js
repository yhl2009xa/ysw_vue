/**
 * Created by Administrator on 2017/12/11.
 * 模块说明:
 */
import  AjaxApi from '@/utils/ajaxApi';
import  AjaxHelper from '@/utils/ajaxHelper';
import  Common from '$utils/common';
import  md5 from 'md5';


var errorOpts = [
  {pattern : "1(3|4|5|7|8)\\d{9}" ,prompt : "手机号输入错误",empty_prompt : "请输入账号"},
  {pattern : "(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}" ,prompt : "密码错误，请输入6-12位字母和数字组合",empty_prompt : "请输入密码"}
]

export default{
  data :function() {
    return {
      showLoginType:1,
      showQrImg:true,
      showErrorTips:false,
      showSuccessTips:false,
      qrImgSrc:'',
      loginErrorStr:'',
      errorOpt:errorOpts,
      showErrorActive: -1
    }
  },
  created(){
    this.queryQrCode();

  },
  computed:{

  },
  methods: {
    queryQrCode: function () {
      var url = AjaxApi.LOGIN_GET_CODE;
      var that = this,
        param = {};
      var callback = function (err, res) {
        if (err) {
          console.log(err.statusText);
          return;
        };
        if (res.code && res.code == 100) {
          that.qrCode = res.content.code;
          that.qrImgSrc = "data:image/png;base64," + res.content.qrCodeImage;
          that.showErrorTips = false;
          that.showSuccessTips = false;

          that.pollGetStatus();
        } else {
          console.log(res.message);
        }
      };

      new AjaxHelper().post(url, param, callback);
    },


    /**
     * 轮询获取登录状态
     */
    pollGetStatus: function () {
      this.interval && clearInterval(this.interval);
      this.interval = setInterval(function () {
        this.getCodeStatus();
      }.bind(this), 2000)
    },

    /**
     * 获取登录状态
     */
    getCodeStatus: function () {
      var url = AjaxApi.LOGIN_POLL_STATUS,
        param = {code: this.qrCode};
      var that = this;
      var callback = function (err, res) {
        if (err) {
          console.log(err.statusText);
          that.showCodeStatus(-1);
          return;
        }
        ;
        switch (res.code) {
          case 100:
            var cookieKey = JSON.stringify({userName: res.content.phone, token: res.content.token});
            Common.setCookie("hysUserInfo", cookieKey);
            window.location.href = '/';
            break;
          case -5000:
          case -1048:
            console.log("二维码失效");
            that.showCodeStatus(-1);
            break;
          case -1047:
            console.log("二维码有效");
            break;
          case -1046:
            console.log("扫描成功");
            that.showCodeStatus(0);
            break;
          case -1045:
            console.log("已取消登录");
            that.showCodeStatus(-1);
            break;
          default:
            console.log(res.message);
            that.showCodeStatus(-1);
            break;
        }
      };
      new AjaxHelper().post(url, param, callback);
    },
    /**
     * 显示二维码的扫描结果
     */
    showCodeStatus: function (stateCode) {
      if (stateCode == -1) {
        this.showQrImg = true;
        this.showErrorTips = true;
        this.showSuccessTips = false;
        this.interval && clearInterval(this.interval);
        this.interval = null;
      } else {
        this.showSuccessTips = true;
        this.showQrImg = false;
      }
    },


    /**
     * 更改登录模式
     * @param e
     */
    changeLoginType: function (e) {
      var $dom = $(e.currentTarget),
        showNav = $dom.data("show");

      if (showNav == "nav_2") {
        this.showLoginType = 2;
        this.interval && clearInterval(this.interval);
      } else {
        this.showLoginType = 1;
      }
    },

    loginValidate: function (e) {
      var that = this,
        doms = $('.login_window .validate');
      for (var index = 0; index < doms.length; index++) {
        var val = $(doms[index]).val(),
          errorStr = $(doms[index]).attr("prompt"),
          empty_errorStr = $(doms[index]).attr("empty_prompt"),
          pattern = $(doms[index]).attr("pattern"),
          bind_id =  $(doms[index]).attr("bind_id"),
          regexp = new RegExp('^' + pattern + '$');

        if (!regexp.test(val)) {
          that.showErrorActive = bind_id;
          that.loginErrorStr = (val == "" ? empty_errorStr : errorStr);
          return;
        }
      }
      this.postLogin();
    },

    //失去焦点的验证
    blurValidate:function(event){
      var current = event.currentTarget;
      var val = $(current).val(),
        errorStr = $(current).attr("prompt"),
        empty_errorStr = $(current).attr("empty_prompt"),
        pattern =  $(current).attr("pattern"),
        bind_id =  $(current).attr("bind_id"),
        regexp = new RegExp('^'+pattern+'$');
      if(!regexp.test(val)){
        this.loginErrorStr = (val == "" ? empty_errorStr : errorStr);
        this.showErrorActive = bind_id;
        return ;
      }
      if($(current).closest(".group_control").hasClass("has_error")){
        this.loginErrorStr = "";
        this.showErrorActive = -1;
      }
    },

    postLogin : function(e) {
      var url = AjaxApi.LOGIN;
      var param = Common.toSerializeObject($('.login_window').serializeArray());
      param.password = md5(param.password);
      if ($('.remember_password .icon').hasClass("no_select")) {
        param.flag = 0;
      } else {
        param.flag = 1;
      }
      var that = this;
      var callback = function (err, res) {
        if (err) {
          console.log(err.statusText);
          return;
        }
        ;
        if (res.code && res.code == 100) {
          var cookieKey = JSON.stringify({userName: res.content.phone, token: res.content.token});
          if (param.flag == 0) {
            Common.setCookie("hysUserInfo", cookieKey);
          } else {
            Common.setCookie("hysUserInfo", cookieKey, 1);
          }
          window.location.href = '/';
        } else {
          console.log(res.message);
        }
      };

      new AjaxHelper().post(url, param, callback);
    }

  },


}
