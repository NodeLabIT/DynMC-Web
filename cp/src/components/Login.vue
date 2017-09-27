<template>
    <div class="login-container">
        <form class="login-form" @submit.prevent="login()" v-if="step == 0">
            <div class="title">
                <span>{{ 'login-required' | translate }}</span>
                <p>{{ 'login-description' | translate }}</p>
            </div>
            <div class="message error hidden-default" id="error"></div>
            <div class="input-group">
                <input id="username" type="text" v-model="username" v-bind:class="{ valid: $root.isValid(username) }" />
                <label for="username">{{ 'username' | translate }}</label>
            </div>
            <div class="input-group">
                <input id="password" type="password" v-model="password" v-bind:class="{ valid: $root.isValid(password) }" />
                <label for="password">{{ 'password' | translate }}</label>
            </div>
            <div class="input-group">
                <button type="submit">{{ 'login' | translate }}</button>
            </div>
        </form>
        <form class="login-form" @submit.prevent="twofa()" v-if="step == 1">
            <div class="title">
                <span>{{ 'twofa' | translate }}</span>
                <p>{{ 'twofa-description' | translate }}</p>
            </div>
            <div class="input-group twofa">
                <input type="text" v-model="twofaCode[0]" maxlength="1" minlength="1" @keypress="$event.target.nextElementSibling.focus()"/>
                <input type="text" v-model="twofaCode[1]" maxlength="1" minlength="1" @keypress="$event.target.nextElementSibling.focus()"/>
                <input type="text" v-model="twofaCode[2]" maxlength="1" minlength="1" @keypress="$event.target.nextElementSibling.focus()"/>
                <input type="text" v-model="twofaCode[3]" maxlength="1" minlength="1" @keypress="$event.target.nextElementSibling.focus()"/>
                <input type="text" v-model="twofaCode[4]" maxlength="1" minlength="1" @keypress="$event.target.nextElementSibling.focus()"/>
                <input type="text" v-model="twofaCode[5]" maxlength="1" minlength="1"/>
            </div>
            <div class="input-group">
                <button type="submit">{{ 'auth' | translate }}</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { sio } from '../main';
    export default {
        data() {
            return {
                username: "",
                password: "",
                twofaCode: [],
                step: 0,

            }
        },
        methods: {
            login() {
                sio().emit('login', {username: this.username, password: this.password});
            },
            twofa() {
                if(this.step === 1) {
                    sio().emit('login-twofa', {twofaCode: this.twofaCode});
                }
            }
        },
        created: function () {
            sio().on('login', (data) => {
                // TODO check status, set cookies, update root-scope login-variable, redirect
                if(data.err) {
                    switch(data.err) {
                        case "username-password-not-defined":
                            $('#error').text(this.$options.filters.translate('username-password-not-defined')).show();
                            break;
                        case "username-password-incorrect":
                            $('#error').text(this.$options.filters.translate('username-password-incorrect')).show();
                            break;
                    }
                } else {
                    this.step = 1;
                }
            });
            sio().on('login-twofa', (data) => {

            });
        }
    }
</script>