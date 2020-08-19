import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import app from './app.vue'
import "./asset/style/common.scss"
import router from "./router/router";

Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(app)
}).$mount('#app');