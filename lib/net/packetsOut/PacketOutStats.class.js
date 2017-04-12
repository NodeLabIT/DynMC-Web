'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutStats {

    constructor() {
        this.id = 10;
    }

    getId() {
        return this.id;
    }

    buildPacket(name) {
        return new JSONPacketBuilder(this.id)
            .getPacket();
    }

}

module.exports = new PacketOutStats();