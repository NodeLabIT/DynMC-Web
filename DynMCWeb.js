'use strict';

const WebServer = require('./lib/WebServer.class');
require('./lib/Log.class');

class DynMCWeb {

    start() {
        Log.info("Launching DynMC");
        Log.debug(new Date().getTime());
        WebServer.start();
    }

    constructor() {
        this.start();
    }

}

module.exports = new DynMCWeb();