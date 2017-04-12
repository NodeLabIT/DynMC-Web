'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutServerTypeAdd {

    constructor() {
        this.id = 8;
    }

    getId() {
        return this.id;
    }

    buildPacket(name, plugins, worlds, manual) {
        return new JSONPacketBuilder(this.id)
            .addProperty("name", name)
            .addProperty("plugins", plugins)
            .addProperty("worlds", worlds)
            .addProperty("manual", manual)
            .getPacket();
    }

}

module.exports = new PacketOutServerTypeAdd();