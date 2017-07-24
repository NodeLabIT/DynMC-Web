<template>
    <div id="app">
        <header>
            <div class="infobar">
                <span class="left uppercase">{{ title }}</span>
                <span class="right uppercase">ILOU</span>
            </div>
            <a class="circle-icon open-dialog" @click="openDialog('#navigation');">
                <i class="material-icons">apps</i>
            </a>
        </header>

        <router-view></router-view>

        <div class="dialog-container closed" id="navigation">
            <div class="dialog small">
                <div class="dialog-header">
                    <a class="close-dialog" @click="closeDialog('#navigation');">
                        <i class="material-icons">close</i>
                    </a>
                    <span class="uppercase">Navigation</span>
                    <span class="description">Wähle den Punkt aus, zu dem du gehen möchtest</span>
                </div>
                <div class="dialog-body">
                    {{ 'test' | translate }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            title: 'DynMC Control Panel'
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
            console.log(value);
            return language[value] === undefined ? value + " (untranslated)" : language[value];
        }
    }
}
</script>