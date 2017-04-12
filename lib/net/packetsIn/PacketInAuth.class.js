'use strict';

class PacketInAuth {

    constructor() {
        this.id = 1;
    }

    getId() {
        return this.id;
    }

    handle(data) {
        if(data.ok) {
            Log.info("Master accepted your Auth-Key!");
        } else {
            Log.error("Master rejected your Auth-Key! Stopping...");
            process.exit(0);
        }
    }

}

module.exports = new PacketInAuth();