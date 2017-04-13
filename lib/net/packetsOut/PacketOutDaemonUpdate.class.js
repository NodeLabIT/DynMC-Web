'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutDaemonUpdate {

    constructor() {
        this.id = 7;
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
    buildPacket(name, newName, host, minPort, maxPort) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("newName", newName)
            .addProperty("host", host)
            .addProperty("minPort", minPort)
            .addProperty("maxPort", maxPort)
            .getPacket();
    }

}

module.exports = new PacketOutDaemonUpdate();