const express = require('express');

const authRouter = require('./auth/auth-router');
const configMW = require('./middleware/config-mw');

const server = express();

configMW(server);

server.use(('/auth', authRouter));

module.exports = server;
