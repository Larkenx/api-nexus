import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vue2Filters from 'vue2-filters'

Vue.use(Vuetify);
Vue.use(Vue2Filters);

new Vue({
  el: '#app',
  render: h => h(App)
})
