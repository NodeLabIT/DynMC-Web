'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutWorldUpdate {

    constructor() {
        this.id = 5;
    }

    getId() {
        return this.id;
    }

    buildPacket(name, newName, description) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("newName", newName)
            .addProperty("description", description)
            .getPacket();
    }

}

module.exports = new PacketOutWorldUpdate();