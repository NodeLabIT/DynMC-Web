import Vue from 'vue'
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';

import App from './App.vue'

import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes = [
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

let language = {};
$.ajax({
    dataType: "json",
    url: "/language/de_DE.json",
    success: function(data) {
        language = data;
        init();
    }
});

const socket = io('http://localhost:8080');
export function sio() {
    return socket;
}

function init() {
    Vue.filter('translate', (value) => {
        return language[value] === undefined ? value + " (untranslated)" : language[value];
    });

    new Vue({
        el: '#dmccp',
        router,
        render: h => h(App),
        data: {
            loggedIn: false
        },
        methods: {
            isValid: function(input) {
                return input !== undefined && input !== "";
            }
        },
        created() {
            this.$router.push('/login');
            if(this.$cookies.isKey('cpSession') && this.$cookies.isKey('cpToken')) {
                this.sio().emit('auto-login', {cpSession: this.$cookies.get('cpSession'), cpToken: this.$cookies.get('cpToken')});
                this.sio().on('auto-login', (data) => {
                    if(data.setup) {
                        this.$router.push('/setup');
                        this.loggedIn = true;
                    } else {
                        if(data.login) {
                            this.$router.push('/dashboard');
                            this.loggedIn = true;
                        }
                    }
                });
            }
        }
    });
}