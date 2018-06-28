/**
* Created by Administrator on 2018/1/16.
* 模块说明:滑动插件 左右
*/

<template>
  <div class="banner_slider_page">


    <div class="cow_slider" >

      <div class="cow_slider_content" ref="banner">
        <div :class="{cow_slider_item:true , active:index == activeIndex}"  :style="{backgroundImage:'url(' + silder.imgSrc + ')'}"   v-for="(silder,index) in sliders" >
          <a :href="silder.url" :class="silder.className"  :target="silder.target"></a>
        </div>
      </div>

      <div class="cow_slider_footer">
        <div class="cow_slider_nav">
          <a :class="{active:index == activeIndex}" v-for="(silder,index) in sliders" @click="gotoPage" :data-index="index"></a>
        </div>
      </div>

    </div>
  </div>

</template>
<style src="./index.less" lang="less" scoped>

</style>

<style >
  @keyframes vIn
  {
    0% {opacity: 0;}
    30% {opacity: 0.3;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
  }

  @-webkit-keyframes vIn /*Safari and Chrome*/
  {
    0% {opacity: 0;}
    30% {opacity: 0.3;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
  }

  @keyframes  vOut
  {
    0% {opacity: 1;}
    30% {opacity: 0.7;}
    50% {opacity: 0.5;}
    100% {opacity: 0;}
  }

  @-webkit-keyframes  vOut
  {
    0% {opacity: 1;}
    30% {opacity: 0.7;}
    50% {opacity: 0.5;}
    100% {opacity: 0;}
  }
</style>



<script>
  import {once} from '../once.js';

  var interval = null;
  /**
   * sliders 数组对象
   * speed 动画的持续时间
   * type  动画类型滑动slide 渐隐fade
   */
  export  default {
    name:'slider',
    props:{
      sliders:{
        type:Array
      },
      speed:{
        type: String,
        default: '0.5s'
      },
      type:{
        type:String,
        default:"fade"
      },
      selectIndex:{
        type: Number,
        default: 0
      }
    },
    data:function () {
      return {
        activeIndex:this.selectIndex
      }
    },
    /**
     * 该组件渲染完成后
     */
    mounted:function () {
      this.$children = this.$refs.banner.children;
      this.__autoAnimate("next",{type:'fade'});
    },

    destroyed:function(){
      if(interval != null){
        clearInterval(interval);
      }
    },

    methods:{
      __autoAnimate:function(towards,options){
        clearInterval(interval);
        var self = this;
        interval =  setInterval(function(){
          self.__doAnimate(towards,options);
        }.bind(this),3000)
      },

      /**
       * @param towrads 需要滑动的方向 左滑右滑 还是跳转
       * @param options  跳转的配置参数
       * @private
       */
      __doAnimate:function(towrads,options){
        if(this.$children.length  < 2){
          return ;
        }
        this.animating = true;
        var nextIndex =  typeof options.nextIndex != "undefined"  ? options.nextIndex:( this.activeIndex + 1) % this.sliders.length;


          if(options.type === "slide"){
            this.__doSlideAnimate(nextIndex);
          }else{
            this.__doFadeAnimate(this.activeIndex,"out",this.speed);
            this.__doFadeAnimate(nextIndex,"in",this.speed);
          }

      },

      __doSlideAnimate:function (next) {
        var $current = this.$children[this.activeIndex],
          $next = this.$children[next] ;
      },

      __doFadeAnimate:function(elIndex,type,speed){

        var   $dom = this.$children[elIndex];

        once($dom,"webkitAnimationEnd",this.__finishAnimate.bind(this,$dom,type,elIndex));

        if(type == "in"){
          $dom.style.display = "block"  ;
          $dom.style.webkitAnimation = "vIn " + speed ;
        }else{
          $dom.style.webkitAnimation = "vOut " + speed ;

        }

      },

      /**
       * 动画完成  对于vue框架的动画 keyframes 必须要在元素 显示的时候才能执行
       * 所以模拟的fadein 与fadeout 先要将元素设置为block让它可以显示
       * @private
       */
      __finishAnimate:function(element,type,next){
        if(type == "out"){
          element.style.display = ""  ;
        }else{
          this.activeIndex = next;
        }
        element.style.webkitAnimation = "";
        this.animating = false;
      },
      /**
       * 点击页面跳转
       */
      gotoPage:function(e){
        if( this.animating){
          return ;
        }
        if(this.activeIndex == e.currentTarget.dataset.index){
          return
        }else{

          this.activeIndex = e.currentTarget.dataset.index
        }

        this.__autoAnimate("goto",{type:'fade',nextIndex:e.index});

//        this.__doAnimate("goto",{type:'fade',nextIndex:e.index});
      }

    },
  }
</script>
