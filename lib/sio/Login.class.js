'use strict';

const Database = require('../database/Database.class');

class Login {

    constructor(data) {
        this.data = data;
    }

    handle(socket) {
        if(this.data.username && this.data.password) {
            let databaseUser = Database.getUsers().get(this.data.username).value();

            console.log(socket.handshake.address);

            // Check for existing user. send error when username not exists
            if(databaseUser === undefined) {
                socket.emit('login', {err: "username-password-incorrect"});
                return;
            }

            // Check for password match. send error when password incorrect
            if(databaseUser.password !== this.data.password) {
                socket.emit('login', {err: "username-password-incorrect"});
            }


        } else {
            socket.emit('login', {err: "username-password-not-defined"});
        }
    }

}

module.exports = Login;