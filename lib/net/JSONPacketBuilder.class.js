'use strict';

class JSONPacketBuilder {

    /**
     * Constructs a new JSONPacketBuilder
     * @param packetId the id of the packet that would be created
     * */
    constructor(packetId) {
        this.jsonString = {
            "id": packetId
        }
    }

    /**
     * Adds a property and value to the JSON-String
     * @param name the name of the property
     * @param value the value of the property
     * */
    addProperty(name, value) {
        this.jsonString[name.toString()] = value;
        return this;
    }

    /**
     * Makes the JSON-Array to a JSON-String
     * @returns JSON-String
     * */
    getPacket() {
        return JSON.stringify(this.jsonString)
    }

}

module.exports = JSONPacketBuilder;