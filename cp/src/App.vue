<template>
    <div>
        <header v-if="$root.$data.loggedIn">
            <div class="infobar">
                <span class="left uppercase">{{ 'control-panel' | translate }}</span>
                <span class="right uppercase hidden-small">{{ user.username }}</span>
            </div>
            <a class="circle-icon open-dialog navtog" @click="openDialog('#navigation');">
                <i class="material-icons">apps</i>
            </a>
        </header>

        <router-view></router-view>

        <div class="dialog-container closed" id="navigation" v-if="$root.$data.loggedIn">
            <div class="dialog small navigation">
                <div class="dialog-header">
                    <a class="close-dialog" @click="closeDialog('#navigation');">
                        <i class="material-icons">close</i>
                    </a>
                    <span class="uppercase">{{ 'navigation' | translate }}</span>
                </div>
                <div class="dialog-body">
                    <div class="grid">
                        <router-link to="/dashboard" @click.native="closeDialog('#navigation');">
                            <i class="material-icons">dashboard</i><span class="icon-text">{{ 'dashboard' | translate }}</span>
                        </router-link>
                        <router-link to="/settings" @click.native="closeDialog('#navigation');">
                            <i class="material-icons">settings</i><span class="icon-text">{{ 'settings' | translate }}</span>
                        </router-link>
                    </div>
                    <hr>
                    <div class="grid">
                        <router-link to="/server-nodes" @click.native="closeDialog('#navigation');">
                            <i class="material-icons">share</i><span class="icon-text">{{ 'server-nodes' | translate }}</span>
                        </router-link>
                        <router-link to="/server-plugins" @click.native="closeDialog('#navigation');">
                            <i class="material-icons">build</i><span class="icon-text">{{ 'server-plugins' | translate }}</span>
                        </router-link>
                        <router-link to="/server-worlds" @click.native="closeDialog('#navigation');">
                            <i class="material-icons">language</i><span class="icon-text">{{ 'server-worlds' | translate }}</span>
                        </router-link>
                        <router-link to="/server-types" @click.native="closeDialog('#navigation');">
                            <i class="material-icons">storage</i><span class="icon-text">{{ 'server-types' | translate }}</span>
                        </router-link>
                    </div>
                    <hr>
                    <div class="grid">
                        <a class="col-1-2 center-text router-link-active">
                            <i class="material-icons">exit_to_app</i><span class="icon-text">{{ 'logout' | translate }} ({{ 'logged-in-as' | translate }} <b>{{ user.username }}</b>)</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="dialog-container closed" id="sio-no-connection">
            <div class="dialog small navigation">
                <div class="dialog-header">
                    <span class="uppercase">{{ 'no-connection' | translate }}</span>
                </div>
                <div class="dialog-body">
                    {{ 'trying-reconnect' | translate }}
                    <div class="center-text" style="margin-top: 14px;">
                        <i class="material-icons spin large">refresh</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { sio } from './main';
    export default {
        data() {
            return {
                user: {
                    username: 'ilou'
                }
            }
        },
        methods: {
            openDialog(dialogId) {
                $(dialogId).removeClass('closed');
            },
            closeDialog(dialogId) {
                $(dialogId).addClass("fade");
                $(dialogId).one('webkitAnimationEnd onanimationend msAnimationEnd', (event) => {
                    $(dialogId).addClass('closed');
                    $(dialogId).removeClass('fade');
                });
            },
        },
        created() {
            sio().on('disconnect', (reason) => {
                this.openDialog('#sio-no-connection');
                sio().on('reconnect', (attemptNumber) => {
                    this.closeDialog('#sio-no-connection');
                });
            });
        }
    }
</script>