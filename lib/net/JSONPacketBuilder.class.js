'use strict';

class JSONPacketBuilder {

    constructor(packetId) {
        this.jsonString = {
            "id": packetId
        }
    }

    addProperty(name, value) {
        this.jsonString[name.toString()] = value;
        return this;
    }

    getPacket() {
        return JSON.stringify(this.jsonString)
    }

}

module.exports = JSONPacketBuilder;