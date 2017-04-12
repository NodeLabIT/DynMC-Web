'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutDaemonAdd {

    constructor() {
        this.id = 6;
    }

    getId() {
        return this.id;
    }

    buildPacket(name, host, minPort, maxPort) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("host", host)
            .addProperty("minPort", minPort)
            .addProperty("maxPort", maxPort)
            .getPacket();
    }

}

module.exports = new PacketOutDaemonAdd();