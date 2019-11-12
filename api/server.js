const express = require("express");
const session = require("express-session");

const apiRouter = require("./api-router");
const configMW = require("./middleware/config-mw");

const sessionConfig = {
  name: "monster",
  secret: process.env.COOKIE_SECRET || "is it secret? is it safe?",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV === "development" ? false : true,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true
};


const server = express();
server.use(express.json());

configMW(server);

server.use(session(sessionConfig));
server.use("/api", apiRouter);

module.exports = server;
