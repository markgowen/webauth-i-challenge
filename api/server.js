const express = require('express');

const apiRouter = require('./api-router')
const configMW = require('./middleware/config-mw');

const server = express();

configMW(server);

server.use('/api', apiRouter);



module.exports = server;
