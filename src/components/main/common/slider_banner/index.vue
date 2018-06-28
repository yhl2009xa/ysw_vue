<template>
  <div class="banner_slider_page">
    <div class="cow_slider" >

      <div class="cow_slider_content">
        <div :class="{active: index == 0 ,cow_slider_item:true}"   v-for="(item,index) in sliders"   :style="{backgroundImage:'url(' + item.imgSrc + ')'}">
          <a :href="item.url" :class="item.className"  :target="item.target?item.target:''"  >
          </a>
        </div>
      </div>

      <div class="cow_slider_footer">
        <div class="cow_slider_nav">
          <a :class="{active: index == 0 }" v-for="(item,index) in sliders"></a>
        </div>
      </div>

    </div>
  </div>


</template>
<style src="./index.less" lang="less" scoped></style>
<script src="./index.js"></script>
