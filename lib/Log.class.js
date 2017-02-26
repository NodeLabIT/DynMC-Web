'use strict';

const config = require('../config.json');
let log = [];

class Log {

    getDateTime() {
        var date = new Date();

        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        var min = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        var sec = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        return hour + ":" + min + ":" + sec + " " + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }

    push(type, message) {
        log.push({type: type, message: message, time: new Date().getTime()});
    }

    info(message) {
        this.push("info", message);
        console.log('\x1b[32m[INFO ' + this.getDateTime() + '] \x1b[37m' + message);
    }

    warn(message) {
        this.push("warn", message);
        console.log('\x1b[33m[WARNING ' + this.getDateTime() + '] \x1b[37m' + message);
    }

    error(message) {
        this.push("error", message);
        console.log('\x1b[31m[ERROR ' + this.getDateTime() + '] \x1b[37m' + message);
    }

    debug(message) {
        if(config.debug) {
            this.push("debug", message);
            console.log('\x1b[36m[DEBUG ' + this.getDateTime() + '] \x1b[37m' + message);
        }
    }

}

global.Log = new Log();