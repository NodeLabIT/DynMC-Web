'use strict';

const fs = require('fs');
const http = require('http');
const https = require('https');

const express = require('express');
const compression = require('compression');
const serve = require('serve-static');
let io;

const ConfigHandler = require('./ConfigHandler.class');

const AutoLogin = require('./sio/AutoLogin.class');
const Login = require('./sio/Login.class');
const LoginTwofa = require('./sio/LoginTwofa.class');

class WebServer {

    constructor() {
        this.app = express();
        this.app.use(compression());

        this.app.use(serve(__dirname + '/../cp/'));
        this.app.use((req, res) => {
            res.send(fs.readFileSync(__dirname + '/../cp/index.html', {encoding: 'utf-8'}));
        });

        if(ConfigHandler.isInDebugMode()) {
            this.server = http.createServer(this.app);
        } else {
            const options = {
                key: fs.readFileSync(__dirname + '/../ssl/server.key', 'utf-8'),
                cert: fs.readFileSync(__dirname + '/../ssl/server.cert', 'utf-8')
            };
            this.server = https.createServer(options, this.app);
        }
        this.server.listen(ConfigHandler.getControlPanelPort());
        io = require('socket.io')(this.server);
        io.on('connection', (socket) => {
            Log.info("Webclient connected");

            socket.on('login', (data) => {
                new Login(data).handle(socket);
            });
            socket.on('login-twofa', (data) => {
                LoginTwofa.handle(socket, data);
            });
            socket.on('auto-login', (data) => {
                AutoLogin.handle(socket, data);
            });
        });
    }

}

module.exports = new WebServer();