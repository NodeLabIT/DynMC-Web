'use strict';

const config = require('../config.json');

class ConfigHandler {

    /**
     * Get the port where the masterserver is running on
     * @returns int port of the masterserver
     * */
    static getMasterserverPort() {
        return config.master.port;
    }

    /**
     * Get the Host where the masterserver is running on
     * @returns String host of the masterserver
     * */
    static getMasterserverHost() {
        return config.master.host;
    }

}

module.exports = ConfigHandler;