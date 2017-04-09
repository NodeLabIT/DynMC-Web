'use strict';

class PacketHandler {

    getPacketId(packetData) {
        return packetData.id;
    }

    handle(packetData) {

    }

}

module.exports = new PacketHandler();