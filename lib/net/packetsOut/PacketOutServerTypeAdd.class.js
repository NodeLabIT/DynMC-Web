'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutServerTypeAdd {

    constructor() {
        this.id = 8;
    }

    /**
     * Gets the id of the packet
     * @returns int
     * */
    getId() {
        return this.id;
    }

    /**
     * Builds the packet that is ready to be sent
     * @returns JSON-String
     * */
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