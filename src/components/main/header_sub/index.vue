<template>
  <div class="main_header_sub_page">
    <div class="header-main clearfix">
      <div class="pull-left">
        <a href="/" class="logo_wrapper">
          <img src="/static/images/logo.png" alt="好e纱" title="好e纱">
        </a>
        <a data-href="/" class="jumpNewPage">回到首页</a>
      </div>
      <div class="pull-right">
        <!-- if:!${userName} -->
        <a data-href="/login/#/" class="jumpNewPage login">登录</a>
        <span class="gray_text">|</span>
        <a data-href="/register/#/main/account" class="jumpNewPage register">注册</a>
        <!-- else -->
        <a data-href="/#/main/purchaser_center" class="jumpNewPage purchaseCenter">${userName}</a>
        <span class="gray_text">|</span>
        <a data-href="/#/main/seller_center" class="jumpNewPage sellerCenter">卖家中心</a>

        <span class="gray_text">|</span>
        <a class="logout">退出</a>
        <!-- /if -->
        <a data-href="/#/main/novice_boot" class="jumpNewPage guide">新手引导</a>
        <a class="hotline">客服热线：0769-82228851</a>
      </div>
    </div>
  </div>
</template>

<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
