'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutPluginUpload {

    constructor() {
        this.id = 2;
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

module.exports = new PacketOutPluginUpload();