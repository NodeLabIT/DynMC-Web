'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutDaemonUpdate {

    constructor() {
        this.id = 7;
    }

    getId() {
        return this.id;
    }

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