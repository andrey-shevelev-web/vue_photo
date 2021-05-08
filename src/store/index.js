import Vue from 'vue'
import Vuex from 'vuex'

import photo from '@/store/modules/photo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    photo,
  },
})
