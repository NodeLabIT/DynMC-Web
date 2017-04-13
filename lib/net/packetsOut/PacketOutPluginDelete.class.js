'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutPluginDelete {

    constructor() {
        this.id = 11;
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
    buildPacket(name) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .getPacket();
    }

}

module.exports = new PacketOutPluginDelete();