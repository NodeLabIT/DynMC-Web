import Vue from 'vue'
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';

import App from './App.vue'

import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes = [
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
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
        global.language = data;
        init();
    }
});

function init() {
    Vue.filter('translate', (value) => {
        return language[value] === undefined ? value + " (untranslated)" : language[value];
    });

    const socket = io();

    new Vue({
        el: '#dmccp',
        router,
        render: h => h(App),
        data: {
            loggedIn: true,
        },
        created() {
            if(this.$cookies.isKey('cpSession') && this.$cookies.isKey('cpToken')) {
                socket.emit('auto-auth', {cpSession: this.$cookies.get('cpSession'), cpToken: this.$cookies.get('cpToken')});
                socket.on('auto-auth', (data) => {
                    if(data.setup)
                        this.$router.push('/setup');
                    else {
                        if(data.login)
                            this.$router.push('/dashboard');
                        else
                            this.$router.push('/login');
                    }
                });
            }
        }
    });
}