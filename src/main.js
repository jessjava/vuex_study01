import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './router'
require('./assets/darkness.css')

Vue.use(VueRouter);
const router = new VueRouter();
configRouter(router);

router.start(Vue.extend(App),"#app");

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
