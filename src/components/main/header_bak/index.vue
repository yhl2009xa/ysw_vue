<template>
  <div class="main_header_new_page">
    <div class="header-main clearfix">
      <div class="pull-left">
        <a data-href="/" class="jumpNewPage">欢迎来到好e纱！</a>
      </div>
      <div class="pull-right">

        <template v-if="userName == ''">
          <a data-href="/login/#/" class="jumpNewPage login">登录</a>
          <span class="gray_text">|</span>
          <a data-href="/register/#/main/account" class="jumpNewPage register">注册</a>
        </template>
        <template v-else>
          <a data-href="/#/main/purchaser_center" class="jumpNewPage purchaseCenter">{{userName}}</a>
          <span class="gray_text">|</span>
          <a data-href="/#/main/seller_center" class="jumpNewPage sellerCenter">卖家中心</a>
          <span class="gray_text">|</span>
          <a class="logout">退出</a>
        </template>

        <a data-href="/#/main/novice_boot" class="jumpNewPage guide">新手引导</a>
        <a class="hotline">客服热线：0769-82228851</a>
      </div>
    </div>
  </div>
</template>
<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
