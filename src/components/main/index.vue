<template>
  <div>
    <loading v-show="fetchLoading">测试vuex的全局loading</loading>
    <header-v > </header-v>
    <search-nav></search-nav>
    <router-view></router-view>
    <footer-v></footer-v>
  </div>

</template>

<style src="./index.less"  lang="less" scoped></style>
<script src="./index.js" ></script>
