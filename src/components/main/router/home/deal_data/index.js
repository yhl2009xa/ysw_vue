/**
 * Created by Administrator on 2018/1/15.
 * 模块说明:
 */
import  AjaxApi from '$utils/ajaxApi';
import  AjaxHelper from '$utils/ajaxHelper';
import  Common from '$utils/common';

 export default{
  data:function() {
    return {
      totalTradeData:{
        totalTrade:0,
        enterCotton:0,
        enterMerch:0,
        enterGarment:0
      },
    };
  },

   created:function(){
    this.__getCountTotal();
   },

   methods:{
    /**
     * 获取成交、入驻纱厂、商家、服装厂统计数据
     */
    __getCountTotal:function(){
      var url = AjaxApi.HOME_DEAL_DATA_TOTAL;
      //console.log(url);
      var param = {},that = this;
      var callback = function(err, res){
        if(err){
         console.log(err.statusText);
          return;
        }

        if(res.code && res.code == 100){
          that.totalTradeData = Object.assign({},res.content);
          //格式化成交金额数
          that.totalTradeData.totalTrade = Common.thousandPoints(res.content.totalTrade, 0);
        } else {
          console.log(res.message);
        }
      };
      new AjaxHelper({isLoading:true,$vue:this}).post(url, param, callback, false);
    }


  }
}
