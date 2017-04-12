'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutWorldUpload {

    constructor() {
        this.id = 4;
    }

    getId() {
        return this.id;
    }

    buildPacket(name, description) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("description", description)
            .getPacket();
    }

}

module.exports = new PacketOutWorldUpload();