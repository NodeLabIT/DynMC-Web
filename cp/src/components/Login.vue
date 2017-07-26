<template>
    <div class="login-container">

    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                twofaCode: ""
            }
        },
        methods: {
            login() {
                socket.emit('login', {username: this.username, password: this.password, twofa: this.twofaCode});
                socket.on('login', (data) => {
                    // TODO check status, set cookies, errormessages, update root-scope login-variable, redirect
                });
            }
        }
    }
</script>