import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Loading from 'vue-loading-overlay'
import VuePhoneNumberInput from 'vue-phone-number-input'
import VueZipCodeInput from 'vue-zipcode-input'
import vueCountryRegionSelect from 'vue-country-region-select'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './lang/i18n.js'
import { Trans } from './lang/Translation'
import VueMeta from 'vue-meta'
import './gtm.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.scss'
import 'font-awesome/css/font-awesome.min.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import VueNumericInput from 'vue-numeric-input'
import Notifications from 'vue-notification'

Vue.component('VuePhoneNumberInput', VuePhoneNumberInput)
Vue.component('VueZipCodeInput', VueZipCodeInput)
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default)
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Loading)
Vue.use(vueCountryRegionSelect)
Vue.use(VueMeta, {
  // optional pluginOptions
  // refreshOnceOnNavigation: true
})
Vue.use(VueNumericInput)
Vue.use(Notifications)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
