import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule';
Vue.use(SchedulePlugin);
Vue.use(vuex)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
