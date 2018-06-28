/**
 * Created by Administrator on 2018/1/16.
 * 模块说明:
 */
import BannerSlider from '$libs/slider/index.vue';

export default {
  data:function(){
    return {
      sliders:[
        {
          imgSrc:'/static/images/main/home/banner_new_01.png',
          className:'home_banner',
          url:'javascript:void(0)'
        },
        {
          imgSrc:'/static/images/main/home/banner_new_02.png',
          className:'home_credit_banner',
          url:'javascript:void(0)'
        },
        {
          imgSrc:'/static/images/main/home/banner_new_03.png',
          className:'home_finance_banner',
          url:'javascript:void(0)'
        },
        {
          imgSrc:'/static/images/main/home/banner_new_04.png',
          className:'home_e_sign_banner',
          url:'javascript:void(0)'
        },
        {
          imgSrc: '/static/images/main/home/banner_new_05.png',
          className: 'home_act_banner',
          url: 'javascript:void(0)'
        }
      ]
    }
  },
  components:{
    BannerSlider
  }
}
