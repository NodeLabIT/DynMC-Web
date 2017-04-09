'use strict';

const net = require('net');

const ConfigHandler = require('../ConfigHandler.class');
const PacketHandler = require('./PacketHandler.class');
const JSONPacket = require('./JSONPacket.class');

let connection;

class NetMasterClient {

    constructor() {
        connection = net.createConnection(ConfigHandler.getMasterserverPort(), ConfigHandler.getMasterserverHost(), () => {
            Log.info("Connected to Masterserver successfully. Starting authentication...");
            this.sendPacket(1);
        });

        connection.on('data', (data) => {
            Log.debug(data.toString());
            PacketHandler.handle(PacketHandler.getPacketId(data), data);
        });

        connection.on('end', () => {
            Log.info("Disconnected from Masterserver successfully");
        });
    }

    sendPacket(packetId) {
        connection.write(new JSONPacket(packetId).getPacket());
    }

}

module.exports = new NetMasterClient();