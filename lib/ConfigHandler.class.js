'use strict';

const config = require('../config.json');

class ConfigHandler {

    /**
     * Get the port where the masterserver is running on
     * @returns int port of the masterserver
     * */
    static getMasterServerPort() {
        return config.master.port;
    }

    /**
     * Get the Host where the masterserver is running on
     * @returns String host of the masterserver
     * */
    static getMasterServerHost() {
        return config.master.host;
    }

    /**
     * Get the authkey to authenticate webapp for masterserver
     * @returns String authkey for authentication
     * */
    static getMasterServerAuthKey() {
        return config.master.key;
    }

}

module.exports = ConfigHandler;