import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import vGallery from 'v-gallery'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(vGallery)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
