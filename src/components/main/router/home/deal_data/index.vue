<template>
  <div class="deal_data max_wrap">
    <p class="item">累计成交（元）：<span class="total_trade">{{totalTradeData.totalTrade}}</span></p>
    <p class="item">入驻纱厂（家）：<span class="enter_cotton">{{totalTradeData.enterCotton}}</span></p>
    <p class="item">入驻商家（家）：<span class="enter_merch">{{totalTradeData.enterMerch}}</span></p>
    <p class="item">入驻服装厂（家）：<span class="enter_garment">{{totalTradeData.enterGarment}}</span></p>
  </div>
</template>
<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
