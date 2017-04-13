'use strict';

const net = require('net');
const fs = require('fs');

const ConfigHandler = require('../ConfigHandler.class');
const PacketOutAuth = require('./packetsOut/PacketOutAuth.class');

let packetsIn = {};

let connection;

class NetMasterClient {

    constructor() {
        connection = net.createConnection(ConfigHandler.getMasterServerPort(), ConfigHandler.getMasterServerHost(), () => {
            Log.info("Connected to Masterserver successfully. Starting authentication...");
            this.loadClientBoundPackets();
            this.sendPacket(PacketOutAuth.buildPacket());
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
            if(typeof packetsIn[data.id].handle === 'function') {
                packetsIn[data.id].handle(data);
            } else {
                Log.error("Packet registered without handle-function (ID: " + data.id + ")");
            }
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

    /**
     * sends a packet to the master
     * @param packet the packet that would be send (use JSONPacketBuilder to create the packet)
     * */
    sendPacket(packet) {
        connection.write(packet);
    }

    /**
     * Loads all clientbound packethandler (master -> web) and caches them
     * */
    loadClientBoundPackets() {
        fs.readdirSync(__dirname + '/packetsIn/').forEach((file) => {
            let packet = require(__dirname + '/packetsIn/' + file);
            packetsIn[packet.getId()] = packet;
        });
    }

}

module.exports = new NetMasterClient();