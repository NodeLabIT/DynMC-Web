<template>
    <div>
        <header v-if="$root.$data.loggedIn">
            <div class="infobar">
                <span class="left uppercase">{{ 'control-panel' | translate }}</span>
                <span class="right uppercase hidden-small">{{ user.username }}</span>
            </div>
            <a class="circle-icon open-dialog" @click="openDialog('#navigation');">
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
                        <router-link to="/dashboard">
                            <i class="material-icons">dashboard</i><span class="icon-text">{{ 'dashboard' | translate }}</span>
                        </router-link>
                        <router-link to="/server-nodes">
                            <i class="material-icons">share</i><span class="icon-text">{{ 'server-nodes' | translate }}</span>
                        </router-link>
                        <router-link to="/server-plugins">
                            <i class="material-icons">build</i><span class="icon-text">{{ 'server-plugins' | translate }}</span>
                        </router-link>
                        <router-link to="/server-worlds">
                            <i class="material-icons">language</i><span class="icon-text">{{ 'server-worlds' | translate }}</span>
                        </router-link>
                        <router-link to="/server-types">
                            <i class="material-icons">storage</i><span class="icon-text">{{ 'server-types' | translate }}</span>
                        </router-link>
                        <router-link to="/settings">
                            <i class="material-icons">settings</i><span class="icon-text">{{ 'settings' | translate }}</span>
                        </router-link>
                    </div>
                    <hr>
                    <div class="grid">
                        <a class="col-1-2 center-text">
                            <i class="material-icons">exit_to_app</i><span class="icon-text">{{ 'logout' | translate }} ({{ 'logged-in-as' | translate }} <b>{{ user.username }}</b>)</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: 'DynMC Control Panel',
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
            setTimeout(function () {
                $(dialogId).addClass('closed');
                $(dialogId).removeClass('fade');
            }, 300);
        }
    },
    filters: {
        translate(value) {
            return language[value] === undefined ? value + " (untranslated)" : language[value];
        }
    }
}
</script>