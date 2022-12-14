import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import './plugins/bootstrap-vue';
import router from './router/index';
Vue.config.productionTip = false
Vue.use(Router);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
