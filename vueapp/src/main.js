//入口文件
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//引入common.css @代表src文件夹
import '@/assets/css/common.scss';
import '@/assets/js/rem.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
