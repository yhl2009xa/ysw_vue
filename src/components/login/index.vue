<template>
  <div class="login_page ">

    <div class="header_wrapper">
      <div class="header-main">
        <a href="/" class="logo-wrapper">
          <img src="/static/images/logo.png"/>
        </a>
        <span class="tag">欢迎登录</span>
      </div>
    </div>


    <div class="content_main">
      <div class="bg">


        <div class="login_main clearfix" onsubmit="return false" novalidate >
          <div class="login_box">
            <ul class="clearfix">
              <li data-show="nav_1" :class="{active:showLoginType == 1}" @click="changeLoginType" >扫码登录</li>
              <li data-show="nav_2" @click="changeLoginType" :class="{active:showLoginType == 2}">账号登录</li>
            </ul>




            <div class="qrCode nav nav_1" v-if="showLoginType == 1">
              <div class="qrImg_wrap" v-show="showQrImg">
                <img class="qrImg" style="height: 200px" :src="qrImgSrc">
                <p style="font-size: 14px;color: #333">打开好e纱小程序，扫描二维码</p>
                <div class="error_tips" v-show="showErrorTips">
                  <p>二维码已失效</p>
                  <button class="cow_btn cow_btn_primary getQrCodeBtn">请点击刷新</button>
                </div>
              </div>


              <div class="scan_success" v-show="showSuccessTips">
                <img src="/static/images/login/success.png"/>
                <p style="color: #333;font-weight: 400;line-height: 1;font-family: 'microsoft yahei';margin-top:20px">扫描成功</p>
                <p style="color: #333;line-height:1;font-size: 14px;font-family: 'microsoft yahei';margin-top:30px">请勿刷新本页面，按手机提示操作</p>
              </div>
            </div>



            <form class="login_content login_window nav nav_2 "  @submit.prevent="loginValidate"  novalidate v-if="showLoginType == 2">
              <div :class="{group_control:true ,username:true, clearfix:true, has_error:showErrorActive == 0}">
                <div class="icon"><span class="user_icon"></span></div>
                <input placeholder="请输入手机号" name="phone" autocomplete="off" class="validate" @blur="blurValidate" :bind_id="0"
                       :pattern ="errorOpt[0].pattern"
                       :prompt="errorOpt[0].prompt"
                       :empty_prompt="errorOpt[0].empty_prompt"
                      >
              </div>
              <div :class="{group_control:true ,password:true ,clearfix:true ,has_error:showErrorActive == 1}" >
                <div class="icon"><span class="password_icon"></span></div>
                <input  placeholder="请输入密码" name="password" type="password" autocomplete="off" class="validate" @blur="blurValidate"
                        :pattern ="errorOpt[1].pattern"
                        :prompt="errorOpt[1].prompt"
                        :empty_prompt="errorOpt[1].empty_prompt"
                        :bind_id="1">
              </div>

              <p class="login_error" v-show="loginErrorStr != '' ">{{loginErrorStr}}</p>
              <button class="cow_btn cow_btn_primary " type="submit">立即登录</button>

            </form>



            <div class="login_bottom">
              <span class="forget_password">忘记密码</span>
              <span class="line">|</span>
              <span class="go_register">免费注册</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="content_footer">
      <div class="main">

        <div class="address_href">
          <ul>
            <li><a href="/">首页</a></li>
            <li><a href="/main/goods">买好纱</a></li>
            <li><a href="/main/news">新闻公告</a></li>
            <li><a href="/main/aboutUs">关于我们</a></li>
            <li><a href="javascript:">联系我们</a></li>
            <li><a href="javascript:">法律声明</a></li>
          </ul>
        </div>
        <div class="dec">
          copyright@2017 www.haoyisha.com 粤ICP备 17067540号
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./index.less"  lang="less" scoped></style>
<script src="./index.js" ></script>
