'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutWorldUpdate {

    constructor() {
        this.id = 5;
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
    buildPacket(name, newName, description) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("newName", newName)
            .addProperty("description", description)
            .getPacket();
    }

}

module.exports = new PacketOutWorldUpdate();