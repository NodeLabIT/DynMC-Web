'use strict';

const WebServer = require('./lib/WebServer.class');
const NetMasterClient = require('./lib/net/NetMasterClient.class');
require('./lib/Log.class');

const Database = require('./lib/database/Database.class');

class DynMCWeb {

    /**
     * Starts the web-app
     * */
    start() {
        Log.info("Launching DynMC");
    }

    constructor() {
        this.start();
    }

}

module.exports = new DynMCWeb();