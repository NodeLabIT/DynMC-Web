'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutDaemonDelete {

    constructor() {
        this.id = 13;
    }

    getId() {
        return this.id;
    }

    buildPacket(name) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .getPacket();
    }

}

module.exports = new PacketOutDaemonDelete();