'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');
const ConfigHandler = require('../../ConfigHandler.class');

class PacketOutAuth {

    constructor() {
        this.id = 1;
    }

    /**
     * Gets the id of the packet
     * @returns int
     * */
    getId() {
        return this.id;
    }

    /**
     * Builds the packet that is ready to be sent
     * @returns JSON-String
     * */
    buildPacket() {
        return new JSONPacketBuilder(this.id)
            .addProperty("key", ConfigHandler.getMasterServerAuthKey())
            .getPacket();
    }

}

module.exports = new PacketOutAuth();