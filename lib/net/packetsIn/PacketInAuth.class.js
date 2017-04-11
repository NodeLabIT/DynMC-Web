'use strict';

class PacketInAuth {

    constructor() {
        this.id = 1;
    }

    getId() {
        return this.id;
    }

    handle(data) {
        console.log(data.ok);
    }

}

module.exports = new PacketInAuth();