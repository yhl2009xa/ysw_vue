<template>
  <div class="main_searchNav_page">
    <div class="search_box clearfix">
      <div class="logo_wrapper">
        <a href="/" class="logo">
          <img src="/static/images/logo_new.png" alt="好e纱" title="好e纱">
        </a>
      </div>
      <form class="search_form" onsubmit="return false;" novalidate>

        <input type="text" name="varName" class="search_input" placeholder="请输入关键字" autocomplete="off" />

        <button type="button" class="search_btn">搜纱线</button>
      </form>
    </div>
    <div class="main_nav clearfix">
      <div class="nav_title">
        <span>纱线分类</span>
      </div>
      <ul class="menu_content clearfix">
        <li class="menu_item"  v-for="(item,index) in menusList" @click="jumpPage">
          <a :data-href="item.href" :class="{jumpNewPage:true ,active:index ==activeIndex }">{{item.mName}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
