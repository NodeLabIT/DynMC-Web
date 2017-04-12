'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutWorldDelete {

    constructor() {
        this.id = 12;
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

module.exports = new PacketOutWorldDelete();