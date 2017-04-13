'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');

class PacketOutServerTypeUpdate {

    constructor() {
        this.id = 9;
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