
require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from '../plugins/vuetify'




Vue.use(VueRouter);

import Home from './view/Home'
import Hello from './view/Hello'
import App from './view/App'
import UsersIndex from './view/UsersIndex'
import PageNotFound from './view/PageNotFound'


const router  = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/vue-home',
            name: 'home',
            component: Home
        },
        {
            path: '/vue-Hello',
            name: 'hello',
            component: Hello
        },
        {
            path: '/vue-users',
            name: 'UsersIndex',
            component: UsersIndex
        },
        { 
            path: "*", 
            component: PageNotFound 
        }
    ]
})


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('select-box', require('./components/SelectBox').default);
Vue.component('select-item', require('./components/SelectItem').default);
Vue.component('select-item-domestic', require('./components/SelectItemDomestic').default);
Vue.component('select-item-domestic-main', require('./components/SelectItemDomesticMain').default);
Vue.component('small-moving', require('./components/SmallMoving').default);
Vue.component('small-moving-main', require('./components/SmallMovingMain').default);
Vue.component('invoice-input', require('./components/InvoiceInput').default);
Vue.component('index-page', require('./components/IndexPage').default);



Vue.component('select-table-ship-kor-per', require('./components/SelectTable/SelectTable-ship-kor-per').default);
Vue.component('select-table-ship-per-kor', require('./components/SelectTable/SelectTable-ship-per-kor').default);
Vue.component('select-table-air-adel-kor', require('./components/SelectTable/SelectTable-air-adel-kor').default);
Vue.component('select-table-air-adel-kor-main', require('./components/SelectTable/SelectTable-air-adel-kor-main').default);
Vue.component('select-table-air-per-kor', require('./components/SelectTable/SelectTable-air-per-kor').default);
Vue.component('select-table-air-kor-peradel', require('./components/SelectTable/SelectTable-air-kor-perAdel').default);



const app = new Vue({
    router,
    el: '#app',
    vuetify: Vuetify,
});
