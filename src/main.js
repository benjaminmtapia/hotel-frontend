import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import Vuelidate from 'vuelidate'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule';
import { store } from './store.js'
Vue.use(SchedulePlugin);
Vue.use(vuex)
Vue.use(Vuelidate)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
