'use strict';

const JSONPacketBuilder = require('../JSONPacketBuilder.class');
const ConfigHandler = require('../../ConfigHandler.class');

class PacketOutAuth {

    constructor() {
        this.id = 1;
    }

    getId() {
        return this.id;
    }

    buildPacket() {
        return new JSONPacketBuilder(this.id)
            .addProperty("key", ConfigHandler.getMasterServerAuthKey())
            .getPacket();
    }

}

module.exports = new PacketOutAuth();