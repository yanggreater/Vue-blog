// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

//引入两个模板
import app from './App.vue';

import VueRouter from 'vue-router';
import routerconf from './router.config.js';//配置路由文件的引入

import iView from 'iview'
import 'iview/dist/styles/iview.css' 
import 'iview/dist/iview.min.js'   
Vue.use(iView);



Vue.use(VueRouter);//插件







//配置路由
const router= new VueRouter(routerconf);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 'app':app },
  router:router,
})
