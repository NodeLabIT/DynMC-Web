import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'

import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Dashboard },
    { path: '*', component: Dashboard }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

global.language = {};
$.ajax({
    dataType: "json",
    url: "/language/de_DE.json",
    success: function(data) {
        console.log(data);
        global.language = data;
        initVue();
    }
});

function initVue() {
    new Vue({
        el: '#dmccp',
        router,
        render: h => h(App)
    });
}