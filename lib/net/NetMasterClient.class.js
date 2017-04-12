'use strict';

const net = require('net');
const fs = require('fs');

const ConfigHandler = require('../ConfigHandler.class');
const JSONPacketBuilder = require('./JSONPacketBuilder.class');

let packetsOut = {};
let packetsIn = {};

let connection;

class NetMasterClient {

    constructor() {
        connection = net.createConnection(ConfigHandler.getMasterServerPort(), ConfigHandler.getMasterServerHost(), () => {
            Log.info("Connected to Masterserver successfully. Starting authentication...");
            this.loadClientBoundPackets();
            this.loadServerBoundPackets();
            this.sendPacket(1);
        });

        connection.on('error', (err) => {
            if(err.code === 'ECONNREFUSED') {
                Log.warn("Master rejected connection! Maybe the Master is offline.");
            } else {
                Log.error("An unknown error occurred!");
            }
        });

        connection.on('data', (data) => {
            data = JSON.parse(data);
            if(packetsIn[data.id] === undefined) {
                throw new Error("Cannot handle a packet with unknown packetId");
            }
            packetsIn[data.id].handle(data);
        });

        connection.on('close', (err) => {
            if(err) {
                Log.error("An unknown error occurred!");
            } else {
                Log.warn("Master rejected connection! Maybe the Auth-Key is wrong or the Master was shut down.");
            }
        });

        connection.on('end', () => {
            Log.info("Connection to Master closed.");
        });
    }

    sendPacket(packetId) {
        // TODO rewrite to module-based
        if(packetsOut[packetId] === undefined) {
            throw new Error("Cannot send a packet with unknown packetId");
        }
        connection.write(packetsOut[packetId].buildPacket());
    }

    loadClientBoundPackets() {
        fs.readdirSync(__dirname + '/packetsIn/').forEach((file) => {
            let packet = require(__dirname + '/packetsIn/' + file);
            packetsIn[packet.getId()] = packet;
        });
    }

    loadServerBoundPackets() {
        fs.readdirSync(__dirname + '/packetsOut/').forEach((file) => {
            let packet = require(__dirname + '/packetsOut/' + file);
            packetsOut[packet.getId()] = packet;
        });
    }

}

module.exports = new NetMasterClient();