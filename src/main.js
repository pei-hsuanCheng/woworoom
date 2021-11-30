import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import './assets/css/_library.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
