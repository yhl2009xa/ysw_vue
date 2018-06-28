
var AjaxHelper = function(options){
  this.options =  $.extend({},this.defaultOptions,options);
  this.isNeedToLogin = this.options.isNeedToLogin ?this.options.isNeedToLogin:false;
  this.isLoading = this.options.isLoading ? this.options.isLoading:false ;
  this.$vue = this.options.$vue ? this.options.$vue:false;
}


/**
 * @param loading  是否添加loading动画
 * @param $element 请求的元素
 * @param isNeedToLogin  当服务端返回的数据提示没有token时,是否需要跳转到登录界面
 * @constructor
 */
AjaxHelper.prototype.defaultOptions = {
  isLoading:false,
  isSellerQuery:false,
  isNeedToLogin:false
}


function errorHandler(that,err, callback){

}

/*
 * 鉴权：token 检测
 * */
AjaxHelper.prototype.beforeSend = function(isNeedToken,xhr){

}


/**
 * 判断是否需要
 * @param url
 * @param callback
 * @param isNeedToken 是否需要添加token
 */
AjaxHelper.prototype.get = function(url,callback){
  var that =this;
  this.showLoading();
  $.ajax({
    url:url,
    type:"GET",
    contentType:'application/x-www-form-urlencoded',
    dataType:"json",
    beforeSend:function(xhr){

    },
    success:function(res,status,xh){
        callback(undefined,res);
    },
    error:function(err){
      errorHandler(that,err,callback);
    },
    complete:function(){

    }.bind(this)
  })
}



/**
 * post请求封装
 * @param url
 * @param data
 * @param callback
 * @param isNeedToken
 */
AjaxHelper.prototype.post = function(url,data,callback){
 this.showLoading();
  var that =this;
  $.ajax({
    url:url,
    type:"POST",
    contentType:"application/x-www-form-urlencoded",
    dataType:"json",
    data:data,
    beforeSend:function(xhr){

    },
    success:function(res,status,xh){
        callback(undefined,res);
    },
    error:function(err){
      errorHandler(that,err,callback);
    },
    complete:function(){
    }.bind(this)
  })
};


/**
 * 显示loading
 */
AjaxHelper.prototype.showLoading = function(){
  if(this.isLoading){
    this.$vue.$store.dispatch("showLoading",true);
  }
}

/**
 * 隐藏loading
 */
AjaxHelper.prototype.hideLoading = function(){
  if(this.isLoading){
    this.$vue.$store.dispatch("showLoading",false);
  }

}

module.exports =  AjaxHelper;
