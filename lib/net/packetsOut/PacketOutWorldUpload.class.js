'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutWorldUpload {

    constructor() {
        this.id = 4;
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
    buildPacket(name, description) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("description", description)
            .getPacket();
    }

}

module.exports = new PacketOutWorldUpload();