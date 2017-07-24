'use strict';

const low = require('lowdb');

class Database {

    constructor() {
        let usersDb = low(__dirname + '/../../data/users.json');
        usersDb.defaults({}).write();
    }

    readUsers() {
        usersDb
    }

}

module.exports = new Database();