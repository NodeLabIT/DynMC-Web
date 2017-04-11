'use strict';

const net = require('net');
const fs = require('fs');

const ConfigHandler = require('../ConfigHandler.class');
const PacketHandler = require('./PacketHandler.class');
const JSONPacketBuilder = require('./JSONPacketBuilder.class');
const AuthenticationPacket = require('./packetsOut/PacketOutAuth.class');

let connection;

class NetMasterClient {

    constructor() {
        connection = net.createConnection(ConfigHandler.getMasterserverPort(), ConfigHandler.getMasterserverHost(), () => {
            Log.info("Connected to Masterserver successfully. Starting authentication...");
            this.loadClientBoundPacketHandlers();
            this.sendPacket(1);
        });

        connection.on('data', (data) => {
            PacketHandler.handle(JSON.parse(data));
        });

        connection.on('end', () => {
            Log.info("Disconnected from Masterserver successfully");
        });
    }

    sendPacket(jsonPacket) {
        // TODO rewrite to module-based
        connection.write(AuthenticationPacket.buildPacket());
    }

    loadClientBoundPacketHandlers() {
        fs.readdirSync(__dirname + '/packetsIn/').forEach((file) => {
            PacketHandler.cacheHandler(__dirname + "/packetsIn/" + file);
        })
    }

}

module.exports = new NetMasterClient();