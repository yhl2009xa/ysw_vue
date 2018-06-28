/**
 * Created by Administrator on 2017/12/11.
 * 模块说明:
 */
import SearchNav from './search_nav/index.vue'
import HeaderV from './header_bak/index.vue'
import FooterV from './footer/index.vue'
import loading from '$libs/loading/index.vue'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      msg: 'Welcome to main'
    }
  },
  components:{
    loading,
    HeaderV,
    SearchNav,
    FooterV
  },
  computed:{
    ...mapGetters([
      'fetchLoading',
    ])
  }
}
