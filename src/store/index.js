import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './auth.module'
import header from './header.module'
import address from './address.module'
import cart from './cart.module'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['auth', 'cart']
  })],
  modules: {
    auth,
    header,
    address,
    cart
  }
})
