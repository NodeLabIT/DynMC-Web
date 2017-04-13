'use strict';

const config = require('../config.json');
let log = [];

class Log {

    /**
     * Gets the Datetime as a readable String (hours:minutes:seconds year-month-day)
     * @returns String the Date-Time
     * */
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

    /**
     * Pushes a message into serverlogs and local cache
     * @param type the type of the message (info/warn/error/debug)
     * @param message the message that was sent
     * */
    push(type, message) {
        // TODO Save to serverlogs
        log.push({type: type, message: message, time: new Date().getTime()});
    }

    /**
     * Sends an information (green prefix)
     * @param message The message you will send
     * */
    info(message) {
        this.push("info", message);
        console.log('\x1b[32m[INFO ' + this.getDateTime() + '] \x1b[37m' + message);
    }

    /**
     * Sends a warning (orange prefix)
     * @param message The message you will send
     * */
    warn(message) {
        this.push("warn", message);
        console.log('\x1b[33m[WARNING ' + this.getDateTime() + '] \x1b[37m' + message);
    }

    /**
     * Sends an error (red prefix)
     * @param message The message you will send
     * */
    error(message) {
        this.push("error", message);
        console.log('\x1b[31m[ERROR ' + this.getDateTime() + '] \x1b[37m' + message);
    }

    /**
     * Sends a debug (blue prefix)
     * @param message The message you will send
     * */
    debug(message) {
        if(config.debug) {
            this.push("debug", message);
            console.log('\x1b[36m[DEBUG ' + this.getDateTime() + '] \x1b[37m' + message);
        }
    }

}

global.Log = new Log();