'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutServerTypeDelete {

    constructor() {
        this.id = 14;
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

module.exports = new PacketOutServerTypeDelete();