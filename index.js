'use strict';

const WebServer = require('./lib/WebServer.class');
const NetMasterClient = require('./lib/net/NetMasterClient.class');
require('./lib/Log.class');

class DynMCWeb {

    /**
     * Starts the web-app
     * */
    start() {
        Log.info("Launching DynMC");
        Log.debug(new Date().getTime());
    }

    constructor() {
        this.start();
    }

}

module.exports = new DynMCWeb();