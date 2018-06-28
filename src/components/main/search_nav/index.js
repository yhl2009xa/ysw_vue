/**
 * Created by Administrator on 2017/12/25.
 * 模块说明:
 */
import commonPath from '$utils/commonPath'


export default {
  data:function(){
    return {

      activeIndex:0,//当前激活的菜单下标
      menusList :[
        {mName:'首页',href:commonPath.MAIN},
        {mName:'买好纱',href:commonPath.GOODS_LIST},
        {mName:'品牌入驻',href:commonPath.BRAND_LIST},
        {mName:'纱行者金融',href:commonPath.FINANCE_MAIN},
        {mName:'资讯中心',href:commonPath.NES_LIST},
        {mName:'关于我们',href:commonPath.ABOUT_US},
      ]
    }
  },
  methods:{
    jumpPage:function(e){
      var $currentTarget = $(e.currentTarget);
      window.location.href = $currentTarget.find("a").attr('data-href');
    }
  }
}
