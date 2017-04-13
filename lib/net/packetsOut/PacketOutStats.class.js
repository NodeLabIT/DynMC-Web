'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutStats {

    constructor() {
        this.id = 10;
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
            .getPacket();
    }

}

module.exports = new PacketOutStats();