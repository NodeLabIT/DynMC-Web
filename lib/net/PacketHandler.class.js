'use strict';

let handlers = {};

class PacketHandler {

    cacheHandler(file) {
        let packet = require(file);
        handlers[packet.getId()] = packet;
        console.log(packet.getId());
    }

    handle(data) {
        if(handlers[data.id] === undefined) {
            throw new Error("Cannot handle a packet with unknown packetId");
        }
        handlers[data.id].handle(data);
    }

}

module.exports = new PacketHandler();