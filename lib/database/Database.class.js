'use strict';

const low = require('lowdb');

class Database {

    constructor() {
        this.usersDb = low(__dirname + '/../../data/users.json');
        this.usersDb.defaults({}).write();
    }

    getUsers() {
        return this.usersDb;
    }

}

module.exports = new Database();