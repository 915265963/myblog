// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '@/utils/rem.js'
import 'element-ui/lib/theme-chalk/index.css'
// import qs from 'qs'
// Vue.prototype.$qs = qs;

// ajax方法封装
import api from '@/api-config'
Vue.prototype.$api = api;


Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
