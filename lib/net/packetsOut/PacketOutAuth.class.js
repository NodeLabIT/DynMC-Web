'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutAuth {

    constructor() {
        this.id = 1;
    }

    getId() {
        return this.id;
    }

    buildPacket() {
        return new JSONPacketBuilder(this.id)
            .addProperty("key", "authkey")
            .getPacket();
    }

}

module.exports = new PacketOutAuth();