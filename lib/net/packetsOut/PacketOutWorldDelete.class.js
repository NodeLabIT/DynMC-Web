'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutWorldDelete {

    constructor() {
        this.id = 12;
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

module.exports = new PacketOutWorldDelete();