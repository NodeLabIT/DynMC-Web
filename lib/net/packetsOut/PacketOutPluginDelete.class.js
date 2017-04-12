'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutPluginDelete {

    constructor() {
        this.id = 11;
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

module.exports = new PacketOutPluginDelete();