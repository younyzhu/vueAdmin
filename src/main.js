// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import 'normalize.css/normalize.css';


import 'element-ui/lib/theme-default/index.css';
import Widgets from './pages/widgets';
import About from './pages/Hello';
import Form from './pages/form';
import Charts from './pages/charts';
import Navagation from './pages/navigation';
import App from './App';

require('font-awesome/css/font-awesome.css');


const routes = [
  { path: '/form', name: 'form', component: Form },
  { path: '/bar', name: 'bar', component: About },
  { path: '/widgets', name: 'widgets', component: Widgets },
  { path: '/navagation', name: 'navagation', component: Navagation },
  { path: '/about', name: 'about', component: About },
  { path: '/chart', name: 'chart', component: Charts },
  { path: '*', name: 'home', redirect: { name: 'widgets' } },
];

Vue.use(VueRouter);

Vue.use(Element);

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

