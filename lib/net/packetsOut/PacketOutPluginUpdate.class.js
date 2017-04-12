'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutPluginUpdate {

    constructor() {
        this.id = 3;
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

module.exports = new PacketOutPluginUpdate();