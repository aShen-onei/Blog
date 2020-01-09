import Vue from 'vue'
import app from './app.vue'
import "./asset/style/common.scss"
import router from "./router/router";


new Vue({
  router,
  render: (h) => h(app)
}).$mount('#app');