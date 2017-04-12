'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutServerTypeUpdate {

    constructor() {
        this.id = 9;
    }

    getId() {
        return this.id;
    }

    buildPacket(name, newName, plugins, worlds, manual) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("newName", newName)
            .addProperty("plugins", plugins)
            .addProperty("worlds", worlds)
            .addProperty("manual", manual)
            .getPacket();
    }

}

module.exports = new PacketOutServerTypeUpdate();