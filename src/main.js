import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../src/components/_globals"
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Element, {
  size: 'small',
  zIndex: 3000
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')