/**
 * store 注入全局的state状态 每个子组件都可以通过this.$store.state. 访问状态属性
 */
import Vue from 'vue'
import App from './register.vue'
import router from '../basic/router'
import store from '../basic/store'
import directive from '../directive/index.js'

import $ from 'jquery'

Vue.config.productionTip = false
directive.initial(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


