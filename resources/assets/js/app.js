
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('menu-profile', require('./components/MenuProfile.vue'));
Vue.component('sidebar-menu', require('./components/SidebarMenu.vue'));
Vue.component('footer-button', require('./components/FooterButton.vue'));
Vue.component('topnav', require('./components/Topnav.vue'));
Vue.component('theme-footer', require('./components/Theme-footer.vue'));
let ContentBody = require('./components/ContentBody.vue');
let Users 		= require('./components/Users.vue');
let Products 	= require('./components/Products.vue');
let AddProduct 	= require('./components/AddProduct.vue');
let AddUser 	= require('./components/AddUser.vue');

const routes = [
  { path: '/home', component: ContentBody },
  { path: '/users', component: Users },
  { path: '/products', component: Products },
  { path: '/addProduct', component: AddProduct},
  { path: '/addUser', component: AddUser},
  {path: '/', redirect: '/home'}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

const app = new Vue({
	el: '#app',
    router
});
